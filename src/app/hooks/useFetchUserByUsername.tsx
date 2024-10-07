// src/hooks/useFetchUserByUsername.ts

import useSWR from "swr";
import { fetcher, FetcherError } from "../utils/fetcher";
import { User } from "../types/user";

interface UseFetchUserByUsernameReturn {
  user: User | undefined;
  loading: boolean;
  error: string | null;
}

export default function useFetchUserByUsername(
  username: string
): UseFetchUserByUsernameReturn {
  const endpoint = username
    ? `https://dummyjson.com/users/search?q=${username}`
    : null;

  const { data, error } = useSWR<{ users: User[] }, FetcherError>(
    endpoint,
    fetcher
  );

  let user: User | undefined = undefined;
  let errorMessage: string | null = null;

  if (data) {
    user = data.users.find(
      (u) => u.username.toLowerCase() === username.toLowerCase()
    );
    if (!user) {
      errorMessage = "User not found";
    }
  }

  if (error) {
    if (error.status === 404) {
      errorMessage = "User not found";
    } else {
      errorMessage = error.message;
    }
    console.error(`Error fetching user "${username}":`, error);
  }

  const loading = !data && !error;

  return { user, loading, error: errorMessage };
}
