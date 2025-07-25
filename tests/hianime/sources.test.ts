import { expect, test } from "bun:test";
import { getHianimeEpisodeSources } from "../../src/hianime/scrapers/sources.scraper";
import { getHianimeEpisodeServers } from "../../src/hianime/scrapers/servers.scraper";

test("hianime search", async () => {
  const episodeId = 213
  const servers = await getHianimeEpisodeServers({ episodeId })
  const server = servers.sub[0]
  if(!server) return;
  const sources = await getHianimeEpisodeSources({ 
    episodeId,
    server,
    fallback: true
  })

  expect(servers).not.toBeEmpty()
  expect(sources).not.toBeEmpty()
});