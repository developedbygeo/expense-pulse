import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { InitialAppSettingsSliceState } from '@/types/store'

const initialState: InitialAppSettingsSliceState = {
    api: {
        port: null,
    },
}

export const appSettingsSlice = createSlice({
    name: 'appSettings',
    initialState,
    reducers: {
        setPort: (state, action: PayloadAction<{ port: number }>) => {
            state.api.port = action.payload.port
        },
        clearPort: (state) => {
            state.api.port = null
        },
    },
})

export const { setPort, clearPort } = appSettingsSlice.actions

export default appSettingsSlice.reducer
