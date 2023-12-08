import { configureStore } from '@reduxjs/toolkit'
import { booksApi } from './apiSlice/apiSlice'
import bannerReducer from './Features/Banner/bannerSlice';
import authReducer from './User/userSlice';

export const store = configureStore({
    reducer: {
        banner: bannerReducer,
        auth: authReducer,
        [booksApi.reducerPath]: booksApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(booksApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch