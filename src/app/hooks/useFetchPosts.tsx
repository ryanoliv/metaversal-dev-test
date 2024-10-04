import { useEffect, useState } from "react";
import { Post } from "../types/post";

interface UseFetchPostsReturn {
  allPosts: Post[];
  fetchMorePosts: () => void;
  loading: boolean;
  loadingMore: boolean;
  error: string | null;
}

export default function useFetchPosts(limit: number = 0): UseFetchPostsReturn {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [skip, setSkip] = useState(0);

  async function fetchPosts(isLoadMore: boolean = false) {
    try {
      if (isLoadMore) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }
      // Delay for testing
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await fetch(
        `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }

      const postsData = await response.json();


      setAllPosts((prevPosts) => [...prevPosts, ...postsData.posts]);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      if (isLoadMore) {
        setLoadingMore(false);
      } else {
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  // Function to fetch more posts
  function fetchMorePosts() {
    setSkip((prevSkip) => {
      const newSkip = prevSkip + limit;
      fetchPosts(true);
      return newSkip;
    });
  }

  return { allPosts, fetchMorePosts, loading, loadingMore, error };
}
