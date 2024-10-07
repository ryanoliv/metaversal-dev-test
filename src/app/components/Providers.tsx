"use client";

import { SWRConfig } from "swr";
import { fetcher, FetcherError } from "../utils/fetcher";
import React, { useMemo } from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const swrConfig = useMemo(
    () => ({
      fetcher,
      dedupingInterval: 60000, // 1 minute
      onError: (error: unknown, key: string) => {
        // Type guard to check if error is FetcherError
        if (error instanceof Error) {
          console.error(`SWR Error for key "${key}":`, error.message);

          // Type assertion to FetcherError to access additional properties
          const fetcherError = error as FetcherError;

          if (fetcherError.status) {
            console.error(`Status Code: ${fetcherError.status}`);
          }

          if (fetcherError.info) {
            console.error("Error Info:", fetcherError.info);
          }
        } else {
          console.error(`SWR Error for key "${key}":`, error);
        }
      },
      // Add other global SWR configurations here
    }),
    []
  );

  return <SWRConfig value={swrConfig}>{children}</SWRConfig>;
}
