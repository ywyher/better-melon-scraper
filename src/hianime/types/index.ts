import type { HianimeAnime, HianimeSearchFilters } from "./anime"

export type HianimeSearchResponse = {
  animes: Partial<HianimeAnime>[]
  searchQuery: string;
  filters?: HianimeSearchFilters; 
  totalPages: number;
  hasNextPage: boolean;
  currentPage: number
}