import { useEffect, useState } from "react";
import { User } from "../types/user";
import { Post } from "../types/post";
import useFetchUsers from "./useFetchUsers";
import useFetchPosts from "./useFetchPosts";

interface UseFetchWhoToFollowReturn {
  usersToFollow: User[];
  loading: boolean;
  error: string | null;
}

export default function useFetchWhoToFollow(): UseFetchWhoToFollowReturn {
  const {
    allUsers,
    loading: usersLoading,
    error: usersError,
  } = useFetchUsers();

  const {
    allPosts,
    loading: postsLoading,
    error: postsError,
  } = useFetchPosts();

  const [usersToFollow, setUsersToFollow] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (usersLoading || postsLoading) {
      setLoading(true);
      return;
    }

    if (usersError || postsError) {
      setError(usersError || postsError);
      setLoading(false);
      return;
    }

    // Calculate the number of posts for each user
    const userPostCounts = allUsers.map((user: User) => {
      const postCount = allPosts.filter(
        (post: Post) => post.userId === user.id
      ).length;
      return { ...user, postCount };
    });

    // Sort users by the number of posts in descending order and pick top 4
    const sortedUsers = userPostCounts
      .sort((a, b) => b.postCount - a.postCount)
      .slice(0, 4);

    setUsersToFollow(sortedUsers);
    setLoading(false);
  }, [allUsers, allPosts, usersLoading, postsLoading, usersError, postsError]);

  return { usersToFollow, loading, error };
}
