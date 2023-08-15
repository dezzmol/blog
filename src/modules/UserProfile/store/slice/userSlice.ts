import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IUser {
    email: string | null;
    displayName: string | null;
    userID: string;
}

const initialState: IUser = {
    email: '',
    displayName: '',
    userID: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.userID = action.payload.userID
            if (state.displayName !== null) {
                state.displayName = action.payload.displayName;
            }
            if (state.email !== null) {
                state.email = action.payload.email;
            }
        },
        deleteUser: (state) => {
            state.email = '';
            state.displayName = '';
            state.userID = '';
        }
    }
})

export const {setUser, deleteUser} = userSlice.actions
export const userReducer = userSlice.reducer