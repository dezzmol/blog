import React, {FunctionComponent} from 'react';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from 'firebase/auth';
import {auth} from "../../../firebase";
import {useAppDispatch, useAppSelector} from "../../../hooks/useTyped";
import {logout} from "../../RegistrationForm";
import {deleteUser} from "../../UserProfile/store/slice/userSlice";
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';

const Logout: FunctionComponent = () => {
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const navigate = useNavigate()

    const LogOut = async () => {
        await signOut(auth).then(() => {
            // Sign-out successful
            dispatch(logout())
            dispatch(deleteUser())
        }).catch((e) => {
            // An error happened.
        });
    }

    if (isAuth) {
        return (
            <ListItemButton onClick={LogOut}>
                <ListItemIcon>
                    <LogoutIcon/>
                </ListItemIcon>
                <ListItemText primary={'Logout'}/>
            </ListItemButton>
        );
    } else {
        return (
            <ListItemButton onClick={() => navigate('/login')}>
                <ListItemIcon>
                    <LoginIcon/>
                </ListItemIcon>
                <ListItemText primary={'Login'}/>
            </ListItemButton>
        )
    }
    
};

export default Logout;