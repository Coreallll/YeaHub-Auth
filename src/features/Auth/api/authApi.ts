import { baseApi } from "@/shared/api/baseApi.ts";
import type { GetAuthResponse, SignUp } from "@/features/Auth/model/types.ts";

export interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginRequest>({
      query: (auth) => ({
        url: "auth/login",
        method: "POST",
        body: auth,
      }),
    }),
    register: build.mutation<GetAuthResponse, SignUp>({
      query: (registration) => ({
        url: "auth/signUp",
        method: "POST",
        body: registration,
      }),
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: "auth/logout",
        method: "GET",
      }),
    }),
    refresh: build.mutation<GetAuthResponse, void>({
      query: () => ({
        url: "auth/refresh",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation, useRefreshMutation } =
  authApi;
