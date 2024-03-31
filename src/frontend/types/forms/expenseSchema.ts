import { Prettify } from '@/frontend/types/UI';
import {
    EXPENSE_ACTIVITY_STATUS,
    EXPENSE_CATEGORY,
    EXPENSE_FREQUENCY,
    EXPENSE_PAYMENT_CURRENCY,
    EXPENSE_PAYMENT_METHOD,
} from '@/frontend/types/data/enums/expenses';
import { Expense } from '@/frontend/types/store/expense';
import { z, ZodType } from 'zod';

export type AddNewExpense = Prettify<
    Omit<Expense, 'ExpenseId' | 'CreatedAt' | 'UpdatedAt'>
>;

export const AddNewExpenseSchema: ZodType<AddNewExpense> = z.object({
    UserId: z.number(),
    Vendor: z.string(),
    Amount: z.number(),
    Description: z.string().optional(),
    PaymentDate: z.string(),
    NextBillingDate: z.string(),
    Frequency: z.nativeEnum(EXPENSE_FREQUENCY),
    PaymentMethod: z.nativeEnum(EXPENSE_PAYMENT_METHOD),
    Currency: z.nativeEnum(EXPENSE_PAYMENT_CURRENCY),
    Category: z.nativeEnum(EXPENSE_CATEGORY),
    IsActive: z.nativeEnum(EXPENSE_ACTIVITY_STATUS),
}) as unknown as ZodType<AddNewExpense>;
