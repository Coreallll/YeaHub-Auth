import type { Specialization } from "@/features/Filters/model/specializationTypes.ts";
import type { User } from "@/shared/types/main.ts";

export interface Company {
  id: string;
  title: string;
  description: string;
  imageSrc: string | null;
}

export interface Collection {
  id: string;
  title: string;
  slug: string;
  description: string;
  imageSrc: string | null;
  isFree: boolean;
  keywords: string[];
  company: Company;
  specializations: Specialization[];
  questionsCount: number;
  createdBy: User;
}
