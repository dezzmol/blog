import React, {useState} from 'react';
import {auth} from "../../../firebase";
import {Button, Grid, TextField} from "@mui/material";
import { updateProfile } from 'firebase/auth';
import {useAppDispatch} from "../../../hooks/useTyped";
import {setUser} from "../store/slice/userSlice";
import {useNavigate} from "react-router-dom";

const CustomProfile = () => {
    const [displayName, setDisplayName] = useState<string>('')
    const [Email, setEmail] = useState<string>('')
    const navigate = useNavigate()
    const user = auth.currentUser
    const dispatch = useAppDispatch()
    const updateNameAndAvatar = async () => {
        await updateProfile(user!, {
            displayName: displayName,
        }).then(() => {
            // Profile updated!
            // ...

            const user = auth.currentUser
            const email = user!.email
            const displayName = user!.displayName
            const userID = user!.uid
            dispatch(setUser({email, displayName, userID}))
            navigate('/profile')
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }

    return (
        <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            width={'12em'}
            style={{marginLeft: "auto", marginRight: "auto"}}
        >
            <Grid item>
                <h3>Edit display name:</h3>
            </Grid>
            <Grid item>
                <TextField
                    defaultValue={user!.displayName}
                    size='small'
                    margin={"dense"}
                    onChange={(e) => setDisplayName(e.target.value)}
                />
            </Grid>
            <Grid item>
                <h3>Edit email:</h3>
            </Grid>
            <Grid item>
                <TextField
                    defaultValue={user!.email}
                    size='small'
                    margin={"dense"}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Grid>
            <Grid item>
                <Button
                    variant={"contained"}
                    fullWidth={true}
                    onClick={updateNameAndAvatar}
                >
                    Save
                </Button>
            </Grid>
        </Grid>
    );
};

export {CustomProfile};