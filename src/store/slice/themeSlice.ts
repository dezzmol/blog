import {createSlice} from "@reduxjs/toolkit";

interface IThemeSlice {
    darkTheme: boolean
}

const initialState: IThemeSlice = {
    darkTheme: false
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.darkTheme = !state.darkTheme
        }
    }
})

export const {toggleTheme} = themeSlice.actions
export default themeSlice.reducer