import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { InitialUserSliceState } from '@/types/store'
import { User } from '@/types/store/user'

const initialState: InitialUserSliceState = {
    data: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.data = action.payload
        },
        clearUser: (state) => {
            state.data = null
        },
    },
})

export const { setUser, clearUser } = userSlice.actions

export default userSlice.reducer
