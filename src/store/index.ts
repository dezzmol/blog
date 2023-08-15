import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "../modules/RegistrationForm";
import themeSlice from "./slice/themeSlice";
import {userReducer} from "../modules/UserProfile";
import {postsReducer} from "../modules/PostsList/"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        theme: themeSlice,
        user: userReducer,
        posts: postsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch