import type { Collection } from "@/entities/collection/model/collectionTypes.ts";

export interface GetCollectionsParams {
  specs: string;
  search: string;
  accessFilter?: boolean | undefined;
}
export interface CollectionsResponse {
  data: Collection[];
  page: number;
  limit: number;
  total: number;
}
