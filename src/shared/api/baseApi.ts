import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { tokenStorage } from "@/shared/lib/authToken";
import { sessionExpired } from "./sessionEvents";

interface RefreshResponse {
  access_token: string;
}

// 1. Базовый запрос
const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.yeatwork.ru/",
  credentials: "include",

  prepareHeaders: (headers, { arg }) => {
    const url = (typeof arg === "string" ? arg : arg.url).replace(/^\/+/, "").split("?")[0] ?? "";

    const isAuthRequest = ["auth/login", "auth/signUp", "auth/refresh"].includes(url);

    if (isAuthRequest) {
      return headers;
    }

    const token = tokenStorage.get();

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  // Выполняем исходный запрос
  let result = await baseQuery(args, api, extraOptions);

  const url = (typeof args === "string" ? args : args.url).replace(/^\/+/, "").split("?")[0] ?? "";

  const isAuthRequest = ["auth/login", "auth/signUp", "auth/logout", "auth/refresh"].includes(url);

  if (result.error?.status !== 401 || isAuthRequest) {
    return result;
  }

  const refreshResult = await baseQuery(
    {
      url: "auth/refresh",
      method: "GET",
    },
    api,
    extraOptions,
  );

  const refreshData = refreshResult.data as RefreshResponse | undefined;

  if (refreshData?.access_token) {
    tokenStorage.set(refreshData.access_token);

    result = await baseQuery(args, api, extraOptions);

    if (result.error?.status !== 401) {
      return result;
    }
  }

  tokenStorage.remove();

  api.dispatch(sessionExpired());
  // api.dispatch(baseApi.util.resetApiState());

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
