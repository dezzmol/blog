import {Grid, Paper, TextField} from '@mui/material';
import React, {FC, useState} from 'react';
import Button from "@mui/material/Button";
import {doc, serverTimestamp, setDoc} from "firebase/firestore";
import {db} from "../../../firebase";
import {useAppSelector} from "../../../hooks/useTyped";
import {useNavigate} from "react-router-dom";

const CreatePostForm: FC = () => {
    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>('')
    const {userID, displayName} = useAppSelector(state => state.user)
    const navigate = useNavigate()

    const createPost = async () => {
        try {
            const id = Date.now()
            const document = await setDoc(doc(db, 'posts', id.toString()), {
                title: title,
                body: body,
                userDisplayName: displayName,
                userID: userID,
                id: id,
                date: serverTimestamp()
            })



            navigate('/feed')
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <Paper style={{padding: '16px'}}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={12}>
                    Post title:
                </Grid>
                <Grid item xs={12} md={12}>
                    <TextField
                        margin={"dense"}
                        size={"small"}
                        onChange={(e) => setTitle(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    Post text:
                </Grid>
                <Grid item xs={12} md={12}>
                    <TextField
                        margin={"dense"}
                        onChange={(e) => setBody(e.target.value)}
                        multiline
                        maxRows={15}
                        minRows={10}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    <Button variant={"contained"} fullWidth onClick={createPost}>
                        Create post
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
};

export {CreatePostForm};