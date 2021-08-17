import axios from 'axios';
import cheerio from 'cheerio';

async function getHTML() {
    const { data: html } = await axios.get('https://www.whsmith.co.uk/charts/fiction-book-chart/cha00003/');
    return html;
}

async function getBookTitle(html) {
    // load up cheerio
    const $ = cheerio.load(html);
    const title = $('.product-name.is-tablet .name-link')
    const author = $('.tile-attribute')
    let titles = [];

    // without .html() in title.html() we get all of the elements, similar to .querySelectorAll()
    // need to loop through each node and grab: title & corresponding author
    // const bookDetails = `${title}By: ${author}`;

    title.each((index, el) => {
        titles.push($(el).html());
        return titles;
    });
    return titles;
}

export { getHTML, getBookTitle };