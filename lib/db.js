// Setup the DB
import { Low } from "lowdb/lib/Low.js";
import { JSONFileSync } from "lowdb/lib/adapters/JSONFileSync.js";

const adapter = new JSONFileSync('../db.json');
const db = new Low(adapter);

db.data = { posts: [], user: {}, count: 0};
db.read();
db.data.posts.push({ id: 1, title: 'lowdb is awesome' })
db.read();
db.write()

export default db;