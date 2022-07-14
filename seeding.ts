import fs from "fs";
import { CONFIG } from "./config";
import { query } from "./db";

const SEED_FILE_PATH = "data/seeding.sql";

const seedQuery = fs.readFileSync(SEED_FILE_PATH, { encoding: "utf-8" });

query(seedQuery, [], (result, success) => {
  if (success) {
    console.log(`${CONFIG.database.table} successfully created!`);
  } else {
    console.log(`Failed to create: ${result}`);
  }
});
