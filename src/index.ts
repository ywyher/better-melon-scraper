import { load, type CheerioAPI } from 'cheerio';
import ky from 'ky';

const response = await ky.get('https://hianime.to/steinsgate-3');
const html = await response.text();

const $: CheerioAPI = load(html);