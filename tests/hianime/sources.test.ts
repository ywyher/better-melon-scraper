import { expect, test } from "bun:test";
import { hianimeSearch } from "../../src/hianime/scrapers/search.scraper";
import { getHianimeEpisodes } from "../../src/hianime/scrapers/episodes.scraper";
import { getHianimeEpisodeSources } from "../../src/hianime/scrapers/sources.scraper";

test("hianime search", async () => {
  const { animes } = await hianimeSearch({
    q: 'steins;gate',
    filters: {
      status: 'FINISHED_AIRING',
      language: 'SUB',
      sort: 'MOST_WATCHED',
      type: 'TV',
      genres: ["SCI_FI"],
      start_date: {
        day: 6,
        month: 4,
        year: 2011
      },
      end_date: {
        day: 14,
        month: 9,
        year: 2011
      },
    },
  })
  if(!animes?.[0]?.id) return;
  const episodes = await getHianimeEpisodes({ animeId: animes?.[0]?.id })
  if(!episodes.length || !episodes[0]?.id) return;
  const sources = await getHianimeEpisodeSources({ animeId: animes?.[0]?.id, episodeId: episodes[0]?.id })

  expect(animes).not.toBeEmpty()
  expect(episodes).not.toBeEmpty()
});