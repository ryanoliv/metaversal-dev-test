import { useEffect, useState } from "react";
import { Post } from "../types/post";

interface UseFetchUserPostsProps {
  userId?: number;
}

interface UseFetchUserPostsReturn {
  userPosts: Post[];
  loading: boolean;
  error: string | null;
}

export default function useFetchUserPosts({
  userId,
}: UseFetchUserPostsProps): UseFetchUserPostsReturn {
  const [userPosts, setUserPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) return;

    const fetchUserPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://dummyjson.com/users/${userId}/posts`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user posts");
        }
        const data = await response.json();
        setUserPosts(data.posts);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserPosts();
  }, [userId]);

  return { userPosts, loading, error };
}
