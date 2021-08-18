// Setup the DB
import { Low } from "lowdb/lib/Low.js";
import { JSONFileSync } from "lowdb/lib/adapters/JSONFileSync.js";

const adapter = new JSONFileSync('../db.json');
const db = new Low(adapter);

db.data = { posts: [], user: {}, count: 0};

db.read();

export default db;