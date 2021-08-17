import { getHTML, getBookTitle } from "./lib/sraper";

// check if data is 'server rendered' via the source code...?

const WHSmithUrl = 'https://www.whsmith.co.uk/charts/fiction-book-chart/cha00003/';
const PubWeeklyUrl = 'https://www.publishersweekly.com/pw/nielsen/hardcoverfiction.html';
const sites = ['WHSmiths', ];

async function go() {
    const WHSmithData = await getHTML(WHSmithUrl);
    const WHSmithsBooks = await getBookTitle(WHSmithData, 'WHSmiths');

    const PubWeeklyData = await getHTML(PubWeeklyUrl);
    const PubWeeklyBooks = await getBookTitle(PubWeeklyData, 'PubWeekly');

    console.log(`The WHSmiths bestsellers are: ${WHSmithsBooks}`);

    console.log(`The Publishers Weekly bestsellers are: ${PubWeeklyBooks}`);

}

go();