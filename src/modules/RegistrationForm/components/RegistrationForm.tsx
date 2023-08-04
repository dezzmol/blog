import React, {FunctionComponent} from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth} from "../../../firebase";
import '../styles/styles.css'
import {useAppDispatch} from "../../../hooks/useTyped";
import {login} from "../../../store/slice/authSlice";
import {Button} from "@mui/material";
import Container from "@mui/material/Container";

const provider = new GoogleAuthProvider();

const RegistrationForm: FunctionComponent = () => {
    const dispatch = useAppDispatch()
    const signIn = async () => {
        await signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential!.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                dispatch(login())
                console.log(user, token)
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    return (
        <Container>
            <Button  onClick={signIn}>Sign In with Google account</Button>

        </Container>
    );
};

export {RegistrationForm};