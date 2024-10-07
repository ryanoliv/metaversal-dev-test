import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { User } from "../types/user";

interface UseFetchUsersReturn {
  allUsers: User[];
  loading: boolean;
  error: string | null;
}

export default function useFetchUsers(): UseFetchUsersReturn {
  const { data, error } = useSWR<{ users: User[] }, Error>(
    "https://dummyjson.com/users",
    fetcher
  );

  return {
    allUsers: data?.users || [],
    loading: !data && !error,
    error: error?.message || null,
  };
}
