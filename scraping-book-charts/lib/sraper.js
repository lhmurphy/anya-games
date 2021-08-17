import axios from 'axios';
import cheerio from 'cheerio';

async function getHTML(url) {
    const { data: html } = await axios.get('https://www.whsmith.co.uk/charts/fiction-book-chart/cha00003/');
    return html;
}

async function getBookTitle(html) {
    // load up cheerio
    const $ = cheerio.load(html);
    const title = $('.name-link')
        .clone()    //clone the element
        .children() //select all the children
        .remove()   //remove all the children
        .end()  //again go back to selected element
        .text();
    const author = $('.tile-attribute')
        .clone()    //clone the element
        .children() //select all the children
        .remove()   //remove all the children
        .end()  //again go back to selected element
        .text();

    // without .html() in title.html() we get all of the elements, similar to .querySelectorAll()
    // need to loop through each node and grab: title & corresponding author
    const bookDetails = `${title}By: ${author}`;
    const splitTitle = title.split(',');
    const splitAuthor = author.split(',');

    console.log('splitTitle', splitTitle);
    console.log('splitAuthor', splitAuthor);


    return bookDetails;
}

export { getHTML, getBookTitle };