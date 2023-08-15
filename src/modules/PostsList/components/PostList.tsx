import React, {FC, useEffect, useState} from 'react';
import {collection, getDocs, orderBy, query} from "firebase/firestore";
import {db} from "../../../firebase";
import {useAppDispatch, useAppSelector} from "../../../hooks/useTyped";
import {IPost, fetchPostsSuccess, fetchPosts, fetchPostsError, searchPost} from "../store/slice/postsSlice";
import {Backdrop, Button, CircularProgress, Grid, Theme, useMediaQuery} from "@mui/material";
import PostForm from "./PostForm";
import PostFilter from "./PostFilter";

const PostList: FC = () => {
    const dispatch = useAppDispatch()
    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
    const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(!isSmallScreen);
    const {isLoading, posts, filteredPosts} = useAppSelector(state => state.posts)
    const [searchTerm, setSearchTerm] = useState<string>('')

    useEffect(() => {
        const getData = async () => {
            try {
                dispatch(fetchPosts())
                const data: IPost[] = [];
                const querySnapshot = collection(db, "posts");
                const dcs = await query(querySnapshot, orderBy('date', 'desc'))
                const docs = await getDocs(dcs)
                docs.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    data.push(doc.data() as IPost)

                });

                dispatch(fetchPostsSuccess(data))
            } catch (e) {
                console.log(e)
                dispatch(fetchPostsError(e as string))
            }
        }

        getData();
    }, [])

    const handleSearchChange = (value: string) => {
        setSearchTerm(value);
        dispatch(searchPost(value));
    };

    const toggleFilters = () => {
        setIsFiltersOpen((prev: boolean) => !prev);
    };

    return (
        <Grid container spacing={2} direction={"row-reverse"}>

            {isSmallScreen ? (
                <Grid item xs={12} md={3}>
                    <Button onClick={toggleFilters} fullWidth>
                        Toggle Search&Filters
                    </Button>
                    <PostFilter isOpen={isFiltersOpen} onChange={handleSearchChange}/>
                </Grid>
            ) : (
                <Grid item md={3}>
                    <PostFilter isOpen={true} onChange={handleSearchChange}/>
                </Grid>
            )}


            <Grid item xs={12} md={9}>
                {filteredPosts.map(post =>
                    <PostForm id={post.id} userID={post.userID} title={post.title} body={post.body}
                              userDisplayName={post.userDisplayName}/>
                )}
            </Grid>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Grid>
    );
};

export {PostList};