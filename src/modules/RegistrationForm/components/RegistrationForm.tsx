import React, {FunctionComponent, useEffect, useState} from 'react';
import { GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../../firebase";
import '../styles/styles.css'
import {useAppDispatch} from "../../../hooks/useTyped";
import {login} from "../../../store/slice/authSlice";
import {Button, Input, TextField} from "@mui/material";
import Container from "@mui/material/Container";
import {redirect, useNavigate} from "react-router-dom";
import {setUser} from "../../../store/slice/userSlice";
import {IDataForReg} from "../types";

const provider = new GoogleAuthProvider();

const RegistrationForm: FunctionComponent = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [haveAcc, setHaveAcc] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const signUp = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
                console.log(user)

                const displayName = 'user'
                dispatch(login())

                dispatch(setUser({email, displayName}))
                navigate('/feed')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }

    const signIn = async () => {
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
                const displayName = user.displayName
                dispatch(login())
                console.log(user)
                dispatch(setUser({email, displayName}))
                navigate('/feed')
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
            <Button style={{marginTop: '5px'}} variant={"contained"} fullWidth={true} onClick={Auth}>{haveAcc ? 'Sign In' : 'SignUp'}</Button>
            <h4 style={{marginTop: '5px'}}>{haveAcc ? "Have not account?" : 'Already have account?'}</h4>
            <Button style={{marginTop: '5px'}} variant={'text'} color={"primary"} onClick={() => setHaveAcc(!haveAcc)}>{haveAcc ? 'Sign Up' : 'Sign In'}</Button>
        </Container>
    );
};

export {RegistrationForm};