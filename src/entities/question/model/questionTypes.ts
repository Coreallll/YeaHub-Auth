import type { User } from "@/shared/types/main.ts";
import type { Skill } from "@/features/Filters/model/skillsTypes.ts";
import type { Specialization } from "@/features/Filters/model/specializationTypes.ts";

export interface QuestionsParams {
  currentPage: number;
  cardsOnPage: number;
  specFilter: string | null;
  collectionId: number;
}

export interface Question {
  id: number;
  title: string;
  imageSrc: string | null;
  description: string;
  longAnswer: string;
  shortAnswer: string;
  rate: number;
  complexity: number;
  keywords: string[];
  createdBy: User;
  questionSkills: Skill[];
  specializations: Specialization[];
}

export interface QuestionsResponse {
  data: Question[];
  page: number;
  limit: number;
  total: number;
}
