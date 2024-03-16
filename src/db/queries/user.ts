import { RegisterUser } from '@/types/forms/userAuthSchema';

import { getDatabase } from '@/db/index';

export const insertUser = async (user: RegisterUser) => {
  const databaseManager = await getDatabase();
  const {
    Username,
    Password,
    FirstName,
    LastName,
    Allowance,
    AnnualIncome = null,
    ProfileImage = null,
  } = user;

  try {
    const insertQuery = `INSERT INTO Users (Username, Password, FirstName, LastName, Allowance, AnnualIncome, ProfileImage) 
            VALUES (?, ?, ?, ?, ?, ?, ?)`;

    const formattedAllowance = parseFloat(Allowance.toFixed(2));
    const formattedAnnualIncome = AnnualIncome ? parseFloat(AnnualIncome.toFixed(2)) : null;

    const result = await databaseManager.run(insertQuery, {
      Username,
      Password,
      FirstName,
      LastName,
      formattedAllowance,
      formattedAnnualIncome,
      ProfileImage,
    });
    console.log(
      `Inserted: ${result.changes} rows into Users table with the last ID ${result.lastID} into user`
    );
  } catch (err) {
    console.error('Error inserting user into database:', err);
  }
};
