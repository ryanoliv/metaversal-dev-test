import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { Post } from "../types/post";
import { useMemo } from "react";

interface UseFetchSuggestedPostsReturn {
  suggestedPosts: Post[];
  loading: boolean;
  error: string | null;
}

export default function useFetchSuggestedPosts(
  limit: number = 2
): UseFetchSuggestedPostsReturn {
  const { data, error } = useSWR<{ posts: Post[] }, Error>(
    "https://dummyjson.com/posts?limit=0",
    fetcher
  );

  const suggestedPosts: Post[] = useMemo(() => {
    if (!data) return [];
    return [...data.posts]
      .sort((a, b) => b.reactions.likes - a.reactions.likes)
      .slice(0, limit);
  }, [data, limit]);

  const loading: boolean = !data && !error;
  const errorMessage: string | null = error?.message || null;

  return { suggestedPosts, loading, error: errorMessage };
}
