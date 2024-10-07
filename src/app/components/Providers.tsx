"use client";

import { SWRConfig } from "swr";
import { fetcher, FetcherError } from "../utils/fetcher";
import React, { useMemo, useState, useEffect } from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

interface FallbackData {
  [key: string]: any;
}

export default function Providers({ children }: ProvidersProps) {
  const [fallback, setFallback] = useState<FallbackData>({});

  useEffect(() => {
    const loadCache = () => {
      const cache: FallbackData = {};
      for (const key in localStorage) {
        if (key.startsWith("swr-cache-")) {
          try {
            const parsed = JSON.parse(localStorage.getItem(key)!);
            const { data, timestamp } = parsed;
            const maxAge = 1000 * 60 * 60 * 24; // 24 hours
            if (Date.now() - timestamp < maxAge) {
              const swrKey = key.replace("swr-cache-", "");
              cache[swrKey] = data;
            } else {
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
  const handleSuccess = (key: string, data: any) => {
    const storageKey = `swr-cache-${key}`;
    const dataToStore = {
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
      } else {
        console.error(`Error setting localStorage key "${storageKey}":`, error);
      }
    }
  };

  const swrConfig = useMemo(
    () => ({
      fetcher,
      dedupingInterval: 60000, 
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
      onSuccess: (data: any, key: string) => {
        handleSuccess(key, data);
      },
      fallback,
    }),
    [fallback]
  );

  return <SWRConfig value={swrConfig}>{children}</SWRConfig>;
}
