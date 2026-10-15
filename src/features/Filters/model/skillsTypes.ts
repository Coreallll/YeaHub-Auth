import type { Specialization } from "@/features/Filters/model/specializationTypes.ts";

export interface Skill {
  id: number;
  title: string;
  description: string;
  imageSrc: string | null;
  specializations: Specialization[];
}

export interface SkillsResponse {
  data: Skill[];
  limit: number;
  page: number;
  total: number;
}
