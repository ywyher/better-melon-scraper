import { expect, test } from "bun:test";
import { getHianimeEpisodeServers } from "../../src/hianime/scrapers/servers.scraper";

test("hianime search", async () => {
  const episodeId = 213
  const servers = await getHianimeEpisodeServers({ episodeId })

  expect(servers).not.toBeEmpty()
});