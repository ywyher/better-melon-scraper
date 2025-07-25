import { expect, test } from "bun:test";
import { getHianimeEpisodes } from "../../src/hianime/scrapers/episodes.scraper";

test("hianime search", async () => {
  const animeId = 'steinsgate-3'
  const episodes = await getHianimeEpisodes({ animeId })

  expect(episodes).not.toBeEmpty()
});