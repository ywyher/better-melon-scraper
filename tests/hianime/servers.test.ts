import { expect, test } from "bun:test";
import { hianimeSearch } from "../../src/hianime/scrapers/search.scraper";
import { getHianimeEpisodes } from "../../src/hianime/scrapers/episodes.scraper";
import { getHianimeEpisodeServers } from "../../src/hianime/scrapers/servers.scraper";

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
  const animeId = animes?.[0]?.id
  if(!animeId) return;

  const episodes = await getHianimeEpisodes({ animeId })
  const episodeId = episodes[0]?.id 
  if(!episodeId) return;
  const servers = await getHianimeEpisodeServers({ episodeId })

  expect(animes).not.toBeEmpty()
  expect(episodes).not.toBeEmpty()
  expect(servers).not.toBeEmpty()
});