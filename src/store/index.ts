import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import themeSlice from "./slice/themeSlice";
import userSlice from "./slice/userSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        theme: themeSlice,
        user: userSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch