import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { User } from "../types/user";
import { Post } from "../types/post";
import { useMemo } from "react";

interface UseFetchWhoToFollowReturn {
  usersToFollow: User[];
  loading: boolean;
  error: string | null;
}

export default function useFetchWhoToFollow(): UseFetchWhoToFollowReturn {
  const { data: usersData, error: usersError } = useSWR<
    { users: User[] },
    Error
  >("https://dummyjson.com/users", fetcher);

  const { data: postsData, error: postsError } = useSWR<
    { posts: Post[] },
    Error
  >("https://dummyjson.com/posts?limit=0", fetcher);

  // Compute users to follow based on post counts
  const usersToFollow: User[] = useMemo(() => {
    if (!usersData || !postsData) return [];

    // Create an array of objects containing user and their postCount
    const userPostCounts = usersData.users.map((user: User) => {
      const postCount = postsData.posts.filter(
        (post: Post) => post.userId === user.id
      ).length;
      return { user, postCount };
    });

    // Sort the users by postCount in descending order and select top 4
    const sortedUsers = userPostCounts
      .sort((a, b) => b.postCount - a.postCount)
      .slice(0, 4)
      .map(({ user }) => user);

    return sortedUsers;
  }, [usersData, postsData]);

  const loading: boolean = !usersData || !postsData;
  const error: string | null =
    usersError?.message || postsError?.message || null;

  return { usersToFollow, loading, error };
}
