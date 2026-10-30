import { baseApi } from "@/shared/api/baseApi.ts";
import type { Collection } from "@/entities/collection/model/collectionTypes.ts";
import type {
  CollectionsResponse,
  GetCollectionsParams,
} from "@/pages/Collections/types/collectionType.ts";

export const collectionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCollections: builder.query<Collection[], GetCollectionsParams>({
      async queryFn({ specs, search, accessFilter }, _api, _extraOptions, baseQuery) {
        const limit = 100;

        const firstResult = await baseQuery({
          url: "collections/public",
          params: {
            page: 1,
            limit,
            ...(specs && { specializations: specs }),
            ...(search && { titleOrDescriptionSearch: search.trim() }),
            ...(accessFilter !== undefined && { isFree: accessFilter }),
          },
        });

        if (firstResult.error) {
          return { error: firstResult.error };
        }

        const firstResponse = firstResult.data as CollectionsResponse;

        const allCollections = [...firstResponse.data];

        const totalPages = Math.ceil(firstResponse.total / firstResponse.limit);

        for (let page = 2; page <= totalPages; page++) {
          const result = await baseQuery({
            url: "collections/public",
            params: {
              page,
              limit,
              ...(specs && { specializations: specs }),
              ...(search && { titleOrDescriptionSearch: search.trim() }),
              ...(accessFilter !== undefined && { isFree: accessFilter }),
            },
          });

          if (result.error) {
            return { error: result.error };
          }

          const response = result.data as CollectionsResponse;

          allCollections.push(...response.data);
        }

        return { data: allCollections };
      },
    }),
  }),
});

export const { useGetCollectionsQuery } = collectionsApi;
