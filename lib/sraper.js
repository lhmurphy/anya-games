import axios from 'axios';
import cheerio from 'cheerio';

const WHSmithEl = '.product-name.is-tablet .name-link';
const PubWeeklyEl = '.nielsen-booktitle';
const WHSmithUrl = 'https://www.whsmith.co.uk/charts/fiction-book-chart/cha00003/';
const PubWeeklyUrl = 'https://www.publishersweekly.com/pw/nielsen/hardcoverfiction.html';

function cleanItems(item) {
    return item.replace(/<[^>]*>/g, ' ').replace(/\s{2,}/g, ' ').trim();
}

async function getHTML(url) {
    const { data: html } = await axios.get(url);
    return html;
}

async function getBookTitle(html, site) {
    const $ = cheerio.load(html);
    let title;
    let titles = [];

    // without .html() in title.html() we get all of the elements, similar to .querySelectorAll()
    // need to loop through each node and grab: title & corresponding author
    // const bookDetails = `${title}By: ${author}`;

    if(site === 'WHSmiths') {
        title = $(WHSmithEl);
    } else if (site === 'PubWeekly') {
        title = $(PubWeeklyEl);
    }

    title.each((index, el) => {
        titles.push($(el).html());
        return titles;
    });
    const cleanTitles = titles.map((item) => cleanItems(item));
    return cleanTitles;
}

export async function getWHSmithsBooks() {
    const WHSmithHTML = await getHTML(WHSmithUrl);
    const WHSmithsBooks = await getBookTitle(WHSmithHTML, 'WHSmiths');
    return WHSmithsBooks;
}

export async function getPubWeeklyBooks() {
    const PubWeeklyData = await getHTML(PubWeeklyUrl);
    const PubWeeklyBooks = await getBookTitle(PubWeeklyData, 'PubWeekly');
    return PubWeeklyBooks;
}