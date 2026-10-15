import { baseApi } from "@/shared/api/baseApi.ts";
import type { Collection } from "@/entities/collection/model/collectionTypes.ts";

export const collectionByIdApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCollectionById: builder.query<Collection, string>({
      query: (collectionId) => ({
        url: `collections/${collectionId}/public`,
      }),
    }),
  }),
});

export const { useGetCollectionByIdQuery } = collectionByIdApi;
