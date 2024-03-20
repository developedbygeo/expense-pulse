import { RegisterUser } from '@/types/forms/userAuthSchema'

import { getDatabase } from '@/db/index'
import { User } from '@/frontend/types/store/user'
import { InsertUserReturnType } from '@/db/types/user'

export const insertUser = async (
    user: RegisterUser
): Promise<InsertUserReturnType> => {
    const databaseManager = await getDatabase()

    const {
        Username,
        Password,
        FirstName,
        LastName,
        Allowance,
        AnnualIncome = null,
        ProfileImage = null,
    } = user

    try {
        const insertQuery = `INSERT INTO Users (Username, Password, FirstName, LastName, Allowance, AnnualIncome, ProfileImage) 
            VALUES (?, ?, ?, ?, ?, ?, ?)`

        const formattedAllowance = parseFloat(Allowance.toFixed(2))
        const formattedAnnualIncome = AnnualIncome
            ? parseFloat(AnnualIncome.toFixed(2))
            : null

        const params = [
            Username,
            Password,
            FirstName,
            LastName,
            formattedAllowance,
            formattedAnnualIncome,
            ProfileImage,
        ]

        const result = await databaseManager.run(insertQuery, ...params)
        console.log(
            `Inserted: ${result.changes} rows into Users table with the last ID ${result.lastID} into user`
        )
        return {
            insertedUserId: result.lastID,
            changes: result.changes,
            error: null,
        }
    } catch (error) {
        console.error('Error inserting user into database:', error)
        return { insertedUserId: null, changes: null, error }
    }
}

export const getAllUsers = async () => {
    const databaseManager = await getDatabase()

    try {
        const selectQuery = `SELECT * FROM Users`

        const result: User[] = await databaseManager.all(selectQuery)

        return result
    } catch (err) {
        console.error('Error getting all users from database:', err)
        throw new Error('Error getting all users from database')
    }
}
