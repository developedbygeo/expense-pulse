import { configureStore } from '@reduxjs/toolkit'

import { userSlice } from '@/store/slices/userSlice'

const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
