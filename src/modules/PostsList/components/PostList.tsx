import React, {FC, useEffect, useState} from 'react';
import {collection, DocumentData, getCountFromServer, getDocs, limit, orderBy, query, QueryDocumentSnapshot, startAfter} from "firebase/firestore";
import {db} from "../../../firebase";
import {useAppDispatch, useAppSelector} from "../../../hooks/useTyped";
import {IPost, fetchPostsSuccess, fetchPosts, fetchPostsError, searchPost, addPost} from "../store/slice/postsSlice";
import {Backdrop, Button, CircularProgress, Grid, Theme, useMediaQuery} from "@mui/material";
import PostForm from "./PostForm";
import PostFilter from "./PostFilter";

const PostList: FC = () => {
    const dispatch = useAppDispatch()
    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
    const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(!isSmallScreen);
    const {isLoading, posts, filteredPosts} = useAppSelector(state => state.posts)
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [selectFilter, setSelectFilter] = useState<number>(15)
    const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot<DocumentData, DocumentData>>()
    const [postsCount, setPostsCount] = useState<number>(0)
    useEffect(() => {
        const getData = async () => {
            try {
                dispatch(fetchPosts())
                const data: IPost[] = [];
                const querySnapshot = collection(db, "posts");
                const count = await getCountFromServer(querySnapshot)
                setPostsCount(count.data().count)
                const dcs = await query(querySnapshot, orderBy('date', 'desc'), limit(selectFilter))
                const docs = await getDocs(dcs)
                docs.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    data.push(doc.data() as IPost)

                });
                setLastDoc(docs.docs[docs.docs.length - 1])
                console.log(lastDoc);

                dispatch(fetchPostsSuccess(data))
            } catch (e) {
                console.log(e)
                dispatch(fetchPostsError(e as string))
            }
        }

        getData();
    }, [selectFilter])

    const uploadMorePosts = async () => {
        if (filteredPosts.length === postsCount) {
            return
        }
        const newData: IPost[] = [];
        const querySnapshot = collection(db, "posts");
        const dcs = await query(querySnapshot, orderBy('date', 'desc'), startAfter(lastDoc), limit(selectFilter))
        const docs = await getDocs(dcs)
        docs.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            newData.push(doc.data() as IPost)

        });
        setLastDoc(docs.docs[docs.docs.length - 1])
        dispatch(addPost(newData))
    }

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
                    <PostFilter isOpen={isFiltersOpen} onChange={handleSearchChange} selectFilter={selectFilter} setSelectFilter={setSelectFilter}/>
                </Grid>
            ) : (
                <Grid item md={3}>
                    <PostFilter isOpen={true} onChange={handleSearchChange} selectFilter={selectFilter} setSelectFilter={setSelectFilter}/>
                </Grid>
            )}


            <Grid item xs={12} md={9}>
                {filteredPosts.map(post =>
                    <PostForm 
                        id={post.id} 
                        userID={post.userID} 
                        title={post.title} 
                        body={post.body}
                        userDisplayName={post.userDisplayName}
                        key={post.id}
                    />
                )}
                <Button variant='outlined' onClick={uploadMorePosts}>Fetch more posts</Button>
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