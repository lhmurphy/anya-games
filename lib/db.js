// Setup the DB
import { Low } from "lowdb/lib/Low.js";
import { JSONFile } from "lowdb/lib/adapters/JSONFile.js";


// const { Low } = require("lowdb/lib/Low.js");
// const { JSONFile } = require("lowdb/lib/adapters/JSONFile.js");


export default function getDB() {
    const adapter = new JSONFile('../db.json');
    const db = Low(adapter);
    return db;
}