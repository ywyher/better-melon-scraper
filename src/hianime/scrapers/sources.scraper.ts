import type { HianimeAnime } from "../types/anime"
import type { HianimeAnimeEpisode } from "../types/episodes";
import { hianimeConfig } from "../utils/config";

type GetHianimeEpisodeSourcesProps = {
  animeId: HianimeAnime['id'];
  episodeId: HianimeAnimeEpisode['id']
}

export async function getHianimeEpisodeSources({
  animeId,
  episodeId
}: GetHianimeEpisodeSourcesProps) {
  const url = `${hianimeConfig.url.watch}/${animeId}?ep=${episodeId}`
  console.log(url)
}