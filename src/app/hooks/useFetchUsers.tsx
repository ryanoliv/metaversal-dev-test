import { useEffect, useState } from "react";
import { User } from "../types/user";

interface UseFetchUsersReturn {
  allUsers: User[];
  loading: boolean;
  error: string | null;
}

export default function useFetchUsers(): UseFetchUsersReturn {
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/users");

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const usersData = await response.json();
        setAllUsers(usersData.users);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unexpected error occurred"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return { allUsers, loading, error };
}
