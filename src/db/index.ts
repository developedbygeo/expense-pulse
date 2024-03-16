import path from 'path';
import sqlite3 from 'sqlite3';
import { Database, open } from 'sqlite'; // This is a convenience method for opening the database

export let db: Database | undefined;

// Determine the path to the database file
const dbPath =
  process.env.NODE_ENV === 'development' ? '../core.db' : path.join(__dirname, './resources/core.db');

// Function to open the database connection
export const openDatabaseConnection = async () => {
  const db = await open({
    filename: dbPath,
    driver: sqlite3.Database,
  });

  await db.exec('PRAGMA journal_mode = WAL');
  console.log('CONNECTED TO DB');

  return db;
};

// The `db` instance is opened immediately for use throughout your application

// Function to close the database connection
export const closeDatabaseConnection = async (db: Database) => {
  await db.close();
};

export const getDatabase = async () => {
  if (!db) {
    db = await openDatabaseConnection();
  }

  return db;
};
