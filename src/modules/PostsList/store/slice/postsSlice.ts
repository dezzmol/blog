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
    filteredPosts: IPost[];
    isLoading: boolean;
    error: string;
}

const initialState: IPosts = {
    posts: [],
    filteredPosts: [],
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
            state.filteredPosts = [...action.payload];
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
        },
        searchPost: (state, action:PayloadAction<string | null>) => {
            if (action.payload) {
                const searchItem = action.payload.toLowerCase();
                state.filteredPosts = state.posts.filter(post => post.title.toLowerCase().includes(searchItem))
            } else {
                state.filteredPosts = state.posts
            }

        },
        // filterPost: (state, action: PayloadAction<string | null>) => {
        //     const statusFilter = action.payload
        //     if (statusFilter) {
        //         state.posts = state.posts.filter(post => post.)
        //     }
        // }
    }
})

export const {fetchPosts, fetchPostsSuccess, fetchPostsError, deletePosts, addPost, searchPost} = postsSlice.actions
export const postsReducer = postsSlice.reducer