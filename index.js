import { getHTML, getBookTitle } from "./lib/sraper";

// check if data is 'server rendered' via the source code...?

const WHSmithUrl = 'https://www.whsmith.co.uk/charts/fiction-book-chart/cha00003/';
const PubWeeklyUrl = 'https://www.publishersweekly.com/pw/nielsen/hardcoverfiction.html';
const sites = ['WHSmiths', ];

async function go() {
    const WHSmithPromise = getHTML(WHSmithUrl);
    const PubWeeklyPromise = getHTML(PubWeeklyUrl);
    const [WHSmithHTML, PubWeeklyHTML] = await Promise.all([WHSmithPromise, PubWeeklyPromise])

    const WHSmithsBooks = await getBookTitle(WHSmithHTML, 'WHSmiths');
    const PubWeeklyBooks = await getBookTitle(PubWeeklyHTML, 'PubWeekly');

    console.log(`
        The WHSmiths bestsellers are: ${WHSmithsBooks} <br>
        The Publishers Weekly bestsellers are: ${PubWeeklyBooks} 
    `);
}

go();