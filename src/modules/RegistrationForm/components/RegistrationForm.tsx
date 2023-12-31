import React, {FunctionComponent, useEffect, useState} from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../../firebase";
import {useAppDispatch, useAppSelector} from "../../../hooks/useTyped";
import {login, loginError, loginSuccess} from "../store/slice/authSlice";
import {Alert, Backdrop, Button, CircularProgress, Collapse, IconButton, TextField} from "@mui/material";
import Container from "@mui/material/Container";
import {useNavigate} from "react-router-dom";
import {setUser} from "../../UserProfile/store/slice/userSlice";
import CloseIcon from '@mui/icons-material/Close';

const RegistrationForm: FunctionComponent = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [haveAcc, setHaveAcc] = useState<boolean>(false)
    const {isLoading, error} = useAppSelector(state => state.auth)
    const [alertOpen, setAlertOpen] = React.useState(false);

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const signUp = async () => {
        dispatch(login())
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
                console.log(user)

                const displayName = 'user'
                dispatch(loginSuccess())
                const userID = user.uid
                dispatch(setUser({email, displayName, userID}))
                navigate('/profile')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setAlertOpen(true)
                dispatch(loginError(errorMessage))
            });

    }

    const signIn = async () => {
        dispatch(login())
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
                const displayName = user.displayName
                dispatch(loginSuccess())
                console.log(user)
                const userID = user.uid
                dispatch(setUser({email, displayName, userID}))
                navigate('/feed')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setAlertOpen(true)
                dispatch(loginError(errorMessage))
            });
    }


    const Auth = () => {
        if (haveAcc) {
            signIn()
        } else {
            signUp()
        }
    }

    return (
        <Container style={{marginLeft: "auto", marginRight: "auto", width: '15em'}}>
            <h1>{haveAcc ? 'Login' : 'Registration'}</h1>
            <h4 >Your email</h4>
            <TextField
                required
                variant={'outlined'}
                label='Required'
                margin={'normal'}
                onChange={(e) => setEmail(e.target.value)}
            />
            <h4>Your password</h4>
            <TextField
                required
                variant={'outlined'}
                label='Required'
                type='password'
                margin={'normal'}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Collapse in={alertOpen}>
            <Alert
                severity='error'
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setAlertOpen(false);
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                {error}
            </Alert>
            </Collapse>
            <Button style={{marginTop: '5px'}} variant={"contained"} fullWidth={true} onClick={Auth}>{haveAcc ? 'Sign In' : 'SignUp'}</Button>
            <h4 style={{marginTop: '5px'}}>{haveAcc ? "Have not account?" : 'Already have account?'}</h4>
            <Button style={{marginTop: '5px'}} variant={'text'} color={"primary"} onClick={() => setHaveAcc(!haveAcc)}>{haveAcc ? 'Sign Up' : 'Sign In'}</Button>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Container>
    );
};

export {RegistrationForm};