import React, {useState} from 'react';
import Container from "@mui/material/Container";
import {auth} from "../../../firebase";
import {Button, Grid, TextField} from "@mui/material";
import { updateProfile } from 'firebase/auth';
import {useAppDispatch} from "../../../hooks/useTyped";
import {setUser} from "../../../store/slice/userSlice";

const CustomProfile = () => {
    const [displayName, setDisplayName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const user = auth.currentUser
    const dispatch = useAppDispatch()
    const updateNameAndAvatar = async () => {
        await updateProfile(user!, {
            displayName: displayName,
        }).then(() => {
            // Profile updated!
            // ...
            dispatch(setUser({email, displayName}))
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