import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IAuth {
    isAuth: boolean
    isLoading: boolean;
    error: string;
}

const initialState: IAuth = {
    isAuth: false,
    isLoading: false,
    error: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.isLoading = true
            state.isAuth = false
            state.error = ''
        },
        loginSuccess: (state) => {
            state.isLoading = false
            state.isAuth = true
            state.error = ''
        },
        loginError: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.isAuth = false
            state.error = action.payload
        },
        logout: (state) => {
            state.isAuth = false
        },
    }
})

export const {login, logout, loginSuccess, loginError} = authSlice.actions
export const authReducer = authSlice.reducer