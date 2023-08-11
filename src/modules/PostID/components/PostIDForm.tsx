import React, {FC, useEffect, useState} from 'react';
import {Backdrop, Button, CircularProgress, Grid, Paper, Theme, useMediaQuery} from "@mui/material";
import {useParams} from "react-router-dom";
import {collection, doc, getDoc, getDocs} from "firebase/firestore";
import {db} from "../../../firebase";
import {IPost} from "../../../store/slice/postsSlice";
import {IComments} from "../../../types";
import About from "./About";
import Comments from "./Comments";
import CommentForm from "./CommentForm";

const PostIdForm: FC = () => {
    const params = useParams()
    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
    const postRef = doc(db, 'posts', `${params.id}`)
    const commentsRef = collection(db, `posts`, `${params.id}`, 'comments')
    const [post, setPost] = useState<IPost>({id: '', body: '', userDisplayName: '', userID: '', title: ''})
    const [comments, setComments] = useState<Array<IComments>>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isAboutOpen, setIsAboutOpen] = useState<boolean>(!isSmallScreen)

    const getPostById = async () => {
        setIsLoading(true)
        const doc = await getDoc(postRef)
        setPost(doc.data() as IPost)
        setIsLoading(false)
    }

    const getCommentsById = async () => {
        setComments([])
        const docs = await getDocs(commentsRef)
        const tmparr: IComments[] = []
        docs.forEach((doc) => {
            tmparr.push(doc.data() as IComments)
        })
        setComments(tmparr)
    }

    const toggleAbout = () => {
        setIsAboutOpen((prev: boolean) => !prev)
    }

    useEffect(() => {
        getPostById()
        getCommentsById()
    }, [])

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={9}>
                <Paper style={{padding: '16px'}}>
                    <h1>{post.title}</h1>
                    {post.body}
                </Paper>
            </Grid>
            {isSmallScreen ? (
                <Grid item xs={12} md={3}>
                    <Button variant={"outlined"} style={{marginBottom: '10px'}} onClick={toggleAbout} fullWidth>
                        Toggle About
                    </Button>
                    <About isOpen={isAboutOpen} authorDisplayName={post.userDisplayName}/>
                </Grid>
            ) : (
                <Grid item md={3}>
                    <About isOpen={isAboutOpen} authorDisplayName={post.userDisplayName}/>
                </Grid>
            )}

            <Grid item xs={12} md={9}>
                <Comments comments={comments}/>
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

export {PostIdForm};