import { merge } from "lodash";

export const globalBaseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8000";

export const baseFetch = async (urlBuilder, options) => {
  const url = typeof urlBuilder === "function" 
    ? urlBuilder({ globalBaseUrl })
    : urlBuilder;

  const baseOptions = {
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
  };

  const finalOptions = merge(baseOptions, options);
  
  if (finalOptions.body instanceof FormData) {
    delete finalOptions.headers["Content-Type"];
  } else if (finalOptions.body && typeof finalOptions.body === "object") {
    finalOptions.body = JSON.stringify(finalOptions.body);
  }

  const response = await fetch(url, finalOptions);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(
      data.detail || `Request failed with status ${response.status}`
    );
  }

  return data;
};