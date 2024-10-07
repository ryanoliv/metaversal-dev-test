export interface FetcherError extends Error {
  info?: unknown;
  status?: number;
}

export const fetcher = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);

  if (!res.ok) {
    const error: FetcherError = new Error(
      "An error occurred while fetching the data."
    );
    try {
      error.info = await res.json();
    } catch {
      error.info = null;
    }
    error.status = res.status;
    throw error;
  }

  return res.json();
};
