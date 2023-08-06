import React, {FunctionComponent, useEffect, useState} from 'react';
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../../firebase";
import '../styles/styles.css'
import {useAppDispatch} from "../../../hooks/useTyped";
import {login} from "../../../store/slice/authSlice";
import {Button, Input, TextField} from "@mui/material";
import Container from "@mui/material/Container";
import {redirect} from "react-router-dom";

const provider = new GoogleAuthProvider();

const RegistrationForm: FunctionComponent = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [haveAcc, setHaveAcc] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const signIn = async () => {
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
                dispatch()
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    const Auth = () => {
        if (haveAcc) {
            signIn()
        } else {

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
            <Button style={{marginTop: '5px'}} variant={"contained"} fullWidth={true} onClick={signIn}>{haveAcc ? 'Sign In' : 'SignUp'}</Button>
            <h4 style={{marginTop: '5px'}}>{haveAcc ? "Have not account?" : 'Already have account?'}</h4>
            <Button style={{marginTop: '5px'}} variant={'text'} color={"primary"} onClick={() => setHaveAcc(!haveAcc)}>{haveAcc ? 'Sign Up' : 'Sign In'}</Button>
        </Container>
    );
};

export {RegistrationForm};