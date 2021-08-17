import { getHTML, getBookTitle } from "./lib/sraper";

// check if data is 'server rendered' via the source code...?

async function go() {
    const WHSmithData = await getHTML('https://www.whsmith.co.uk/charts/fiction-book-chart/cha00003/');
    const books = await getBookTitle(WHSmithData);

    console.log(`The WHSmiths bestsellers are: ${books}`);
}

go();