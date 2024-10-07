// src/app/components/Providers.tsx

"use client";

import { SWRConfig } from "swr";
import { fetcher, FetcherError } from "../utils/fetcher";
import React, { useMemo, useState, useEffect } from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

interface StoredData<T> {
  data: T;
  timestamp: number;
}

type FallbackData = Record<string, unknown>;

export default function Providers({ children }: ProvidersProps) {
  const [fallback, setFallback] = useState<FallbackData>({});

  useEffect(() => {
    // Function to load cache from localStorage
    const loadCache = () => {
      const cache: FallbackData = {};
      for (const key in localStorage) {
        if (key.startsWith("swr-cache-")) {
          try {
            const storedItem = localStorage.getItem(key);
            if (!storedItem) continue;

            const parsed: StoredData<unknown> = JSON.parse(storedItem);
            const { data, timestamp } = parsed;
            const maxAge = 1000 * 60 * 60 * 24; // 24 hours

            if (Date.now() - timestamp < maxAge) {
              // Remove 'swr-cache-' prefix to get the original SWR key
              const swrKey = key.replace("swr-cache-", "");
              cache[swrKey] = data;
            } else {
              // Remove expired cache
              localStorage.removeItem(key);
            }
          } catch (error) {
            console.error(`Error parsing localStorage key "${key}":`, error);
            localStorage.removeItem(key);
          }
        }
      }
      setFallback(cache);
    };

    loadCache();
  }, []);

  // Function to save data to localStorage
  const handleSuccess = <T,>(key: string, data: T) => {
    const storageKey = `swr-cache-${key}`;
    const dataToStore: StoredData<T> = {
      data,
      timestamp: Date.now(),
    };
    try {
      localStorage.setItem(storageKey, JSON.stringify(dataToStore));
    } catch (error) {
      if (
        error instanceof DOMException &&
        (error.name === "QuotaExceededError" ||
          error.name === "NS_ERROR_DOM_QUOTA_REACHED")
      ) {
        console.warn(
          "LocalStorage quota exceeded. Consider clearing some data."
        );
        // Optionally, implement cache eviction strategies here
      } else {
        console.error(`Error setting localStorage key "${storageKey}":`, error);
      }
    }
  };

  const swrConfig = useMemo(
    () => ({
      fetcher,
      dedupingInterval: 60000, // 1 minute
      onError: (error: unknown, key: string) => {
        if (error instanceof Error) {
          console.error(`SWR Error for key "${key}":`, error.message);

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
      onSuccess: <T,>(data: T, key: string) => {
        handleSuccess<T>(key, data);
      },
      fallback, // Provide the loaded cache as fallback
      // Optionally, you can adjust other configurations here
    }),
    [fallback]
  );

  return <SWRConfig value={swrConfig}>{children}</SWRConfig>;
}
