import { getHTML } from "./lib/sraper";

// check if data is 'server rendered' via the source code...?

async function go() {
    console.log(await getHTML('https://www.whsmith.co.uk/charts/fiction-book-chart/cha00003/'));
}

go();