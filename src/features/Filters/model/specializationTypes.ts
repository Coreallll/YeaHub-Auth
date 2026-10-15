export interface Specialization {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageSrc: string | null;
}

export interface SpecializationsResponse {
  data: Specialization[];
  page: number;
  limit: number;
  total: number;
}
