import { getHTML, getWHSBookTitle, getPubWeeklyBookTitle } from "./lib/sraper";

// check if data is 'server rendered' via the source code...?

const WHSmithUrl = 'https://www.whsmith.co.uk/charts/fiction-book-chart/cha00003/';
const PubWeeklyUrl = 'https://www.publishersweekly.com/pw/nielsen/hardcoverfiction.html';
const sites = ['WHSmiths', ];

async function go() {
    const WHSmithData = await getHTML(WHSmithUrl);
    const WHSmithsBooks = await getWHSBookTitle(WHSmithData);

    const PubWeeklyData = await getHTML(PubWeeklyUrl);
    const PubWeeklyBooks = await getPubWeeklyBookTitle(PubWeeklyData);

    console.log(`The WHSmiths bestsellers are: ${WHSmithsBooks}`);

    console.log(`The Publishers Weekly bestsellers are: ${PubWeeklyBooks}`);

}

go();