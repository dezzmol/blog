import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IPost {
    id: string;
    userID: string;
    title: string;
    body: string;
    userDisplayName: string;
}

export interface IPosts {
    posts: IPost[];
    isLoading: boolean;
    error: string;
}

const initialState: IPosts = {
    posts: [],
    isLoading: false,
    error: '',
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        fetchPosts: (state) => {
            state.isLoading = true;
            state.posts = [];
            state.error = '';
        },
        fetchPostsSuccess: (state, action: PayloadAction<IPost[]>) => {
            state.isLoading = false;
            state.posts = [...action.payload];
            state.error = '';
        },
        fetchPostsError: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.posts = [];
            state.error = action.payload;
        },
        deletePosts: (state) => {
            state.posts = [];
        },
        addPost: (state, action:PayloadAction<IPost>) => {
            state.posts.push(action.payload)
        }
    }
})

export const {fetchPosts, fetchPostsSuccess, fetchPostsError, deletePosts, addPost} = postsSlice.actions
export default postsSlice.reducer