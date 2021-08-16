import axios from 'axios';
import cheerio from 'cheerio';

async function getHTML(url) {
    const { data: html } = await axios.get('https://www.whsmith.co.uk/charts/fiction-book-chart/cha00003/');
    return html;
}

async function getBookTitle(html) {
    // load up cheerio
    const $ = cheerio.load(html);
    const title = $('[class="name-link"]');
    const author = $('.tile-attribute');

    const bookDetails = `${title.html()}By: ${author.html()}`;
    return bookDetails;

    // need to loop through each node and grab: 
    // title
    // author
}

export { getHTML, getBookTitle };