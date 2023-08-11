import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IUser {
    email: string;
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
            state.email = action.payload.email;
            state.userID = action.payload.userID
            if (state.displayName !== null) {
                state.displayName = action.payload.displayName!;
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
export default userSlice.reducer