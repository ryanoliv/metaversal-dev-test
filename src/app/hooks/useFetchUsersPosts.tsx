
import useSWR from "swr";
import { fetcher, FetcherError } from "../utils/fetcher";
import { Post } from "../types/post";

interface UseFetchUserPostsProps {
  userId?: number;
  enabled?: boolean;
}

interface UseFetchUserPostsReturn {
  userPosts: Post[];
  loading: boolean;
  error: string | null;
}

export default function useFetchUserPosts({
  userId,
  enabled = true,
}: UseFetchUserPostsProps): UseFetchUserPostsReturn {
  // Construct the API endpoint only if userId is provided and enabled
  const endpoint =
    userId && enabled ? `https://dummyjson.com/users/${userId}/posts` : null;

  const { data, error } = useSWR<{ posts: Post[] }, FetcherError>(
    endpoint,
    fetcher
  );

  let userPosts: Post[] = [];
  let errorMessage: string | null = null;

  if (data) {
    userPosts = data.posts;
  }

  if (error) {
    if (error.status === 404) {
      errorMessage = "Posts not found for this user.";
    } else {
      errorMessage = error.message;
    }
    console.error(`Error fetching posts for userId "${userId}":`, error);
  }

  const loading = endpoint ? !data && !error : false;

  return { userPosts, loading, error: errorMessage };
}
