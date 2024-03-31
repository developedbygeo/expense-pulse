import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitialExpenseState, InitialUserSliceState } from '@/types/store';
import { User } from '@/types/store/user';
import { userApi } from '@/frontend/store/api/user';
import { Expense, UpdateExpense } from '@/frontend/types/store/expense';

type UpdateExpensePayload = {
    id: Expense['ExpenseId'];
    data: Partial<UpdateExpense>;
};

const initialState: InitialExpenseState = {
    expenses: [],
};

export const expenseSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        setExpenses: (state, action: PayloadAction<Expense[]>) => {
            state.expenses = action.payload;
        },
        updateExpense: (state, action: PayloadAction<UpdateExpensePayload>) => {
            const { id, data } = action.payload;
            const index = state.expenses.findIndex((e) => e.ExpenseId === id);
            if (index !== -1) {
                state.expenses[index] = {
                    ...state.expenses[index],
                    ...data,
                };
            }
        },
        clearExpenses: (state) => {
            state.expenses = [];
        },
    },
    // extraReducers: (builder) => {
    //     builder.addMatcher(
    //         userApi.endpoints.get.matchFulfilled,
    //         (state, action) => {
    //             state.availableUsers = action.payload.data;
    //         }
    //     );
    // },
});

export const { setExpenses, updateExpense, clearExpenses } =
    expenseSlice.actions;

export default expenseSlice.reducer;
