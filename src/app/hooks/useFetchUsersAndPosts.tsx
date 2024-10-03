import { useState, useEffect } from "react";
import { User } from "../types/user";
import { Post } from "../types/post";

interface UseFetchUsersAndPostsReturn {
  allUsers: User[];
  allPosts: Post[];
  loading: boolean;
  error: string | null;
}

export default function useFetchUsersAndPosts(): UseFetchUsersAndPostsReturn {
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsersAndPosts() {
      try {
        setLoading(true);
        const [usersRes, postsRes] = await Promise.all([
          fetch("https://dummyjson.com/users"),
          fetch("https://dummyjson.com/posts"),
          //   fetch("https://dummyjson.com/notfound-1"),
          //   fetch("https://dummyjson.com/notfound-2"),
        ]);

        if (!usersRes.ok || !postsRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const usersData = await usersRes.json();
        const postsData = await postsRes.json();

        // Store all users and posts in their original order
        setAllUsers(usersData.users);
        setAllPosts(postsData.posts);
      } catch (err: unknown) {
        setError(
          err instanceof Error ? err.message : "An unexpected error occurred"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchUsersAndPosts();
  }, []);

  return { allUsers, allPosts, loading, error };
}
