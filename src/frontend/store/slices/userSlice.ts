import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { InitialUserSliceState } from '@/types/store'
import { User } from '@/types/store/user'

const initialState: InitialUserSliceState = {
    currentUser: null,
    availableUsers: [],
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.currentUser = action.payload
        },
        clearUser: (state) => {
            state.currentUser = null
        },
    },
})

export const { setUser, clearUser } = userSlice.actions

export default userSlice.reducer
