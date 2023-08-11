import React, {FC, useEffect, useState} from 'react';
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../../firebase";
import {useAppDispatch, useAppSelector} from "../../../hooks/useTyped";
import {IPost, fetchPostsSuccess, fetchPosts, fetchPostsError} from "../../../store/slice/postsSlice";
import {Backdrop, Button, CircularProgress, Grid, Theme, useMediaQuery} from "@mui/material";
import PostForm from "./PostForm";
import PostFilter from "./PostFilter";

const PostList: FC = () => {
    const dispatch = useAppDispatch()
    const posts = useAppSelector(state => state.posts.posts)
    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
    const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(!isSmallScreen);
    const {isLoading} = useAppSelector(state => state.posts)


    useEffect(() => {
        const getData = async () => {
            try {
                dispatch(fetchPosts())
                const data: IPost[] = [];
                const querySnapshot = await getDocs(collection(db, "posts"));
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
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

    const toggleFilters = () => {
        setIsFiltersOpen((prev: boolean) => !prev);
    };

    return (
        <Grid container spacing={2} direction={"row-reverse"}>

            {isSmallScreen ? (
                <Grid item xs={12} md={3}>
                    <Button onClick={toggleFilters} fullWidth>
                        Toggle Filters
                    </Button>
                    <PostFilter isOpen={isFiltersOpen}/>
                </Grid>
            ) : (
                <Grid item md={3}>
                    <PostFilter isOpen={true}/>
                </Grid>
            )}


            <Grid item xs={12} md={9}>
                {posts.map(post =>
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

export default PostList;