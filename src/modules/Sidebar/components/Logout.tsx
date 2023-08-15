import React, {FunctionComponent} from 'react';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from 'firebase/auth';
import {auth} from "../../../firebase";
import {useAppDispatch} from "../../../hooks/useTyped";
import {logout} from "../../RegistrationForm";
import {deleteUser} from "../../UserProfile/store/slice/userSlice";

const Logout: FunctionComponent = () => {
    const dispatch = useAppDispatch()

    const LogOut = async () => {
        await signOut(auth).then(() => {
            // Sign-out successful
            dispatch(logout())
            dispatch(deleteUser())
        }).catch((e) => {
            // An error happened.
        });
    }


    return (
        <ListItemButton onClick={LogOut}>
            <ListItemIcon>
                <LogoutIcon/>
            </ListItemIcon>
            <ListItemText primary={'Logout'}/>
        </ListItemButton>
    );
};

export default Logout;