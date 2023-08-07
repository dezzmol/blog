import React, {FC} from 'react';
import {Button, Grid, TextField} from "@mui/material";
import firebase from 'firebase/compat/app'
import UserInfo = firebase.UserInfo;
import {useNavigate} from "react-router-dom";


const UserProfile: FC<UserInfo> = (user) => {
    const navigate = useNavigate()

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
                <h3>Display name:</h3>
            </Grid>
            <Grid item>
                <TextField
                    disabled
                    defaultValue={user.displayName}
                    size='small'
                    margin={"dense"}
                />
            </Grid>
            <Grid item>
                <h3>Email:</h3>
            </Grid>
            <Grid item>
                <TextField
                    disabled
                    defaultValue={user.email}
                    size='small'
                    margin={"dense"}
                />
            </Grid>
            <Grid item>
                <Button
                    variant={"contained"}
                    fullWidth={true}
                    onClick={() => navigate('/profile/settings')}
                >
                    Edit
                </Button>
            </Grid>
        </Grid>
    );
};

export {UserProfile};