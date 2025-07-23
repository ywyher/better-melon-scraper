import ky from "ky";
import type { HianimeAnimeEpisode } from "../types/episodes";
import { hianimeConfig } from "../utils/config";
import type { HianimeEpiosdeServersApiReponse, HianimeEpisodeServer } from "../types/servers";
import { load } from "cheerio";

type GetEpisodeServersProps = {
  episodeId: HianimeAnimeEpisode['id']
} 

export async function getHianimeEpisodeServers({
  episodeId
}: GetEpisodeServersProps) {
  const content: HianimeEpiosdeServersApiReponse = await ky.get(
    `${hianimeConfig.url.ajax}/episode/servers?episodeId=${episodeId}`
  ).json();

  const $ = load(content.html)

  const servers: {
    sub: HianimeEpisodeServer[],
    dub: HianimeEpisodeServer[],
    raw: HianimeEpisodeServer[]
  } = {
    sub: [],
    dub: [],
    raw: []
  }

  $(`.ps_-block.ps_-block-sub.servers-sub .ps__-list .server-item`).each(
      (_, item) => {
        servers.sub.push({
          id: Number($(item)?.attr("data-server-id")?.trim()) || null,
          name: $(item).find("a").text().toLowerCase().trim(),
        });
      }
  );

  $(`.ps_-block.ps_-block-sub.servers-dub .ps__-list .server-item`).each(
    (_, item) => {
      servers.dub.push({
        id: Number($(item)?.attr("data-server-id")?.trim()) || null,
        name: $(item).find("a").text().toLowerCase().trim(),
    });
    }
  );

  $(`.ps_-block.ps_-block-sub.servers-raw .ps__-list .server-item`).each(
    (_, item) => {
      servers.raw.push({
        id: Number($(item)?.attr("data-server-id")?.trim()) || null,
        name: $(item).find("a").text().toLowerCase().trim(),
      });
    }
  );

  return servers;
}