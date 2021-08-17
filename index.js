import express from "express";
import { getWHSmithsBooks, getPubWeeklyBooks } from "./lib/sraper";

const app = express();

app.get('/scrape', async (req, res, next) => {
    console.log('Scraping');
    
    const [WHSmithsBooks, PubWeeklyBooks] = await Promise.all([
        getWHSmithsBooks(), 
        getPubWeeklyBooks()
    ]);

    console.log(WHSmithsBooks, PubWeeklyBooks);
    res.json({ WHSmithsBooks, PubWeeklyBooks})
});

app.listen(2093, () => console.log(`Example app running on PORT 2092`))

// console.log(`
// The WHSmiths bestsellers are: ${WHSmithsBooks} <br>
// The Publishers Weekly bestsellers are: ${PubWeeklyBooks} 
// `);