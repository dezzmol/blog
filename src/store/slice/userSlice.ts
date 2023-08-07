import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IUser {
    email: string;
    displayName: string | null;
}

const initialState = {
    email: '',
    displayName: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.email = action.payload.email;
            if (state.displayName !== null) {
                state.displayName = action.payload.displayName!;
            }
        },
        deleteUser: (state) => {
            state.email = '';
            state.displayName = '';
        }
    }
})

export const {setUser, deleteUser} = userSlice.actions
export default userSlice.reducer