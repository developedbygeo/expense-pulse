import path from 'path'
import sqlite3 from 'sqlite3'
import { Database, open } from 'sqlite' // This is a convenience method for opening the database

export let currentDb: Database | undefined

// Determine the path to the database file
// const dbPath =
//     process.env.NODE_ENV === 'development'
//         ? '../../expenses.db'
//         : path.join(__dirname, './resources/expenses.db')

// TODO update this for production.
const dbPath = path.join(process.cwd(), 'expenses.db')

// Function to open the database connection
export const openDatabaseConnection = async () => {
    const db = await open({
        filename: dbPath,
        driver: sqlite3.Database,
    })

    await db.exec('PRAGMA journal_mode = WAL')
    console.log('CONNECTED TO DB')

    currentDb = db

    return db
}

// The `db` instance is opened immediately for use throughout your application

// Function to close the database connection
export const closeDatabaseConnection = async (db: Database) => {
    await db.close()
}

export const getDatabase = async () => {
    if (!currentDb) {
        currentDb = await openDatabaseConnection()
    }

    console.log('GETTING DB INSTANCE')

    // console.log all the tables in the database
    const tables = await currentDb.all(
        "SELECT name FROM sqlite_master WHERE type='table'"
    )

    tables.forEach((table) => {
        console.log(table)
    })

    console.log('RETURNING DB INSTANCE')

    return currentDb
}
