import { useEffect, useState } from "react";
import { Post } from "../types/post";

interface UseFetchSuggestedPostsReturn {
  suggestedPosts: Post[];
  loading: boolean;
  error: string | null;
}

export default function useFetchSuggestedPosts(
  limit: number = 2
): UseFetchSuggestedPostsReturn {
  const [suggestedPosts, setSuggestedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSuggestedPosts() {
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/posts?limit=100`);

        if (!response.ok) {
          throw new Error("Failed to fetch suggested posts");
        }

        const postsData = await response.json();
        // Sort posts by likes in descending order and take top `limit` posts
        const sortedPosts = postsData.posts
          .sort((a: Post, b: Post) => b.reactions.likes - a.reactions.likes)
          .slice(0, limit);

        setSuggestedPosts(sortedPosts);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unexpected error occurred"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchSuggestedPosts();
  }, [limit]);

  return { suggestedPosts, loading, error };
}
