import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitialUserSliceState } from '@/types/store';
import { User } from '@/types/store/user';
import { userApi } from '@/frontend/store/api/user';

const initialState: InitialUserSliceState = {
    currentUser: null,
    availableUsers: [],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.currentUser = action.payload;
        },
        clearUser: (state) => {
            state.currentUser = null;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            userApi.endpoints.getUsers.matchFulfilled,
            (state, action) => {
                state.availableUsers = action.payload.data;
            }
        );
    },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
