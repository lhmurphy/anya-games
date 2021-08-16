import axios from 'axios';

async function getHTML(url) {
    const res = await axios.get('https://www.whsmith.co.uk/charts/fiction-book-chart/cha00003/');
    console.log(res);
}

export { getHTML };