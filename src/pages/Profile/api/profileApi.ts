import { baseApi } from "@/shared/api/baseApi.ts";

interface ProfileResponse {
  id: string;
  username: string;
  email: string;
  isVerified: boolean;
}

export const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<ProfileResponse, void>({
      query: () => ({
        url: "/auth/profile",
      }),
    }),
  }),
});

export const { useGetProfileQuery } = profileApi;
