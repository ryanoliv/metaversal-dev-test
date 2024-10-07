import { useCallback, useMemo } from "react";
import useSWRInfinite from "swr/infinite";
import { fetcher, FetcherError } from "../utils/fetcher";
import { Post } from "../types/post";

interface UseFetchPostsReturn {
  allPosts: Post[];
  fetchMorePosts: () => void;
  loading: boolean;
  loadingMore: boolean;
  error: string | null;
  hasMore: boolean;
}

export default function useFetchPosts(
  limit: number = 0,
  keyPrefix: string = "posts"
): UseFetchPostsReturn {
  // Define the SWR key with pagination parameters
  const getKey = useCallback(
    (pageIndex: number, previousPageData: { posts: Post[] } | null) => {
      if (previousPageData && previousPageData.posts.length < limit)
        return null;
      const skip = pageIndex * limit;
      return `https://dummyjson.com/posts?limit=${limit}&skip=${skip}&key=${keyPrefix}`;
    },
    [limit, keyPrefix]
  );

  const { data, error, size, setSize, isValidating } = useSWRInfinite<
    { posts: Post[] },
    FetcherError
  >(getKey, fetcher);

  const allPosts = data ? data.flatMap((page) => page.posts) : [];

  const loadingInitial: boolean = !data && !error;
  const loadingMore: boolean = Boolean(isValidating && data && size > 0);
  const loading: boolean = loadingInitial;

  const hasMore: boolean = useMemo(() => {
    if (!data) return true;
    const lastPage = data[data.length - 1];
    return lastPage.posts.length === limit;
  }, [data, limit]);

  const fetchMorePosts = useCallback(() => {
    setSize((prevSize) => prevSize + 1);
  }, [setSize]);

  return {
    allPosts,
    fetchMorePosts,
    loading,
    loadingMore,
    error: error?.message || null,
    hasMore,
  };
}
