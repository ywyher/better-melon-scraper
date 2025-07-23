export type HianimeType = "MOVIE" | "TV" | "ONA" | "OVA" | "SPECIAL" | "MUSIC"
export type HianimeStatus = "FINISHED_AIRING" | "CURRENTLY_AIRING" | "NOT_YET_AIRED";
export type HianimeRated = "G" | "PG" | "PG-13" | "R" | "R+" | "Rx"
export type HianimeScore = "APPALLING" | "HORRIBLE" | "VERY_BAD" | "BAD" | "AVERAGE" | "FINE" | "GOOD" | "VERY_GOOD" | "GREAT" | "MASTERPIECE"
export type HianimeSeason = "SPRING" | "SUMMER" | "FALL" | "WINTER"
export type HianimeLanguage = "SUB" | "DUB" | "SUB_DUB"
export type HianimeSort =  "DEFAULT" | "RECENTLY_ADDED" | "RECENTLY_UPDATED" | "SCORE" | "NAME_AZ" | "RELEASED_DATE" | "MOST_WATCHED"
export type HianimeGenre =  "ACTION" | "ADVENTURE" | "CARS" | "COMEDY" | "DEMENTIA" | "DEMONS" | "DRAMA" | "ECCHI" | "FANTASY" | "GAME" | "HAREM" | "HISTORICAL" | "HORROR" | "ISEKAI" | "JOSEI" | "KIDS" | "MAGIC" | "MARTIAL_ARTS" | "MECHA" | "MILITARY" | "MUSIC" | "MYSTERY" | "PARODY" | "POLICE" | "PSYCHOLOGICAL" | "ROMANCE" | "SAMURAI" | "SCHOOL" | "SCI_FI" | "SEINEN" | "SHOUJO" | "SHOUJO_AI" | "SHOUNEN" | "SHOUNEN_AI" | "SLICE_OF_LIFE" | "SPACE" | "SPORTS" | "SUPER_POWER" | "SUPERNATURAL" | "THRILLER" | "VAMPIRE"
export type HianimeDate = {
  year: number;
  month: number;
  day: number
}

export type HanimeSearchQueryParams = Partial<{
  q: string;
  page: string;
  type: HianimeType;
  status: HianimeStatus;
  rated: HianimeRated;
  score: HianimeScore;
  season: HianimeSeason;
  language: HianimeLanguage;
  start_date: HianimeDate;
  end_date: HianimeDate;
  sort: HianimeSort;
  genres: HianimeGenre[];
}>

export type HianimeSearchFilters = Omit<HanimeSearchQueryParams, "q" | "page">;

export type HianimeFilterKeys = Partial<
  keyof Omit<HianimeSearchFilters, "start_date" | "end_date">
>;

export type HianimeAnimeTitle = {
  english: string;
  native: string
}

export type HianimeAnimeEpisodes = {
  sub: number;
  dub: number;
}

export type HianimeAnime = {
  animeId: string;
  title: HianimeAnimeTitle;
  poster: string;
  duration: string;
  type: HianimeType;
  episodes: HianimeAnimeEpisodes;
}