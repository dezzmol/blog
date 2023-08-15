import React, {FC, useState} from 'react';
import {Button, Grid, TextField} from "@mui/material";
import {addDoc, collection, doc, serverTimestamp} from "firebase/firestore";
import Firebase, {db} from "../../../firebase";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../../hooks/useTyped";

const CommentForm: FC = () => {
    const params = useParams()
    const {displayName, userID} = useAppSelector(state => state.user)
    const [comment, setComment] = useState<string>('')
    const commentsRef = collection(db, `posts`, `${params.id}`, 'comments')
    const submitCom = async () => {
        if (comment.length <= 3) {
            return;
        }
        console.log(comment, displayName, userID)
        await addDoc(commentsRef, {
            body: comment,
            userDisplayName: displayName,
            userID: userID,
            date: serverTimestamp()
        })

        setComment('')
    }

    return (
        <Grid container spacing={2} direction={"column"}>
            <Grid item xs={12} md={12}>
                <TextField label="Write a comment" value={comment} onChange={(e) => setComment(e.target.value)}/>
            </Grid>
            <Grid item xs={12} md={12}>
                <Button onClick={submitCom} variant={"outlined"}>Submit</Button>
            </Grid>
        </Grid>
    );
};

export default CommentForm;