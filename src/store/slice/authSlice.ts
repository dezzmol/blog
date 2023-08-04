import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IAuth {
    isAuth: boolean
}

const initialState: IAuth = {
    isAuth: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.isAuth = true
        },
        logout: (state) => {
            state.isAuth = false
        },
    }
})

export const {login, logout} = authSlice.actions
export default authSlice.reducer