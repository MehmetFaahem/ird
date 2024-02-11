import sqlite3 from "sqlite3";
import { open } from "sqlite";

// Open SQLite database connection
export async function openDb() {
  return open({
    filename: "C:/Users/2400/Desktop/pwithsqlite/ird/db/dua_main.sqlite",
    driver: sqlite3.Database,
  });
}
