import { configureStore } from '@reduxjs/toolkit';

import { userApi } from '@/store/api/user';
import { appSettingsSlice } from '@/store/slices/appSettings';
import { userSlice } from '@/store/slices/userSlice';

const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [appSettingsSlice.name]: appSettingsSlice.reducer,

    // api reducers
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
