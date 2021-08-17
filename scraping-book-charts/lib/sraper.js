import axios from 'axios';
import cheerio from 'cheerio';

const WHSmithUrl = 'https://www.whsmith.co.uk/charts/fiction-book-chart/cha00003/';
const PubWeeklyUrl = 'https://www.publishersweekly.com/pw/nielsen/hardcoverfiction.html';

function cleanItems(item) {
    return item.replace(/<[^>]*>/g, ' ').replace(/\s{2,}/g, ' ').trim();
}

async function getHTML(url) {
    const { data: html } = await axios.get(url);
    return html;
}

async function getWHSBookTitle(html) {
    // load up cheerio
    const $ = cheerio.load(html);
    const title = $('.product-name.is-tablet .name-link')
    const author = $('.tile-attribute')
    let titles = [];
    let books = {};

    // without .html() in title.html() we get all of the elements, similar to .querySelectorAll()
    // need to loop through each node and grab: title & corresponding author
    // const bookDetails = `${title}By: ${author}`;

    title.each((index, el) => {
        titles.push($(el).html());
        return titles;
    });
    return titles;

    // create an object of the books
}

async function getPubWeeklyBookTitle(html) {
    const $ = cheerio.load(html);
    const title = $('.nielsen-booktitle')
    let titles = [];

    title.each((index, el) => {
        titles.push($(el).html());
        return titles;
    });
    
    const cleanTitles = titles.map((item) => cleanItems(item));
    return cleanTitles;
}

export { getHTML, getWHSBookTitle, getPubWeeklyBookTitle };