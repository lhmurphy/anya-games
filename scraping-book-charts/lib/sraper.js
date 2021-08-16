import axios from 'axios';
import cheerio from 'cheerio';

async function getHTML(url) {
    const { data: html } = await axios.get('https://www.whsmith.co.uk/charts/fiction-book-chart/cha00003/');
    return html;
}

async function getBookTitle(html) {
    // load up cheerio
    const $ = cheerio.load(html);
    const el = $('[class="name-link"]')
    console.log(el);
}

export { getHTML, getBookTitle };