import { useEffect, useState } from "react";
import { Post } from "../types/post";

interface UseFetchPostsReturn {
  allPosts: Post[];
  loading: boolean;
  error: string | null;
}

export default function useFetchPosts(): UseFetchPostsReturn {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/posts");

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const postsData = await response.json();

        setAllPosts(postsData.posts);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unexpected error occurred"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return { allPosts, loading, error };
}
