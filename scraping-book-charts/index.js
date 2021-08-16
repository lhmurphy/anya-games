import { getHTML, getBookTitle } from "./lib/sraper";

// check if data is 'server rendered' via the source code...?

async function go() {
    getBookTitle(await getHTML('https://www.whsmith.co.uk/charts/fiction-book-chart/cha00003/'));
}

go();