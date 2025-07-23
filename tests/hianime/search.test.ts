import { expect, test } from "bun:test";
import { hianimeSearch } from "../../src/hianime/scrapers/search.scraper";

test("hianime search", async () => {
  const data = await hianimeSearch({
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

  expect(data).not.toBeEmpty()
});