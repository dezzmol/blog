import React, {FunctionComponent} from 'react';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";

const Logout: FunctionComponent = () => {


    return (
        <ListItemButton >
            <ListItemIcon>
                <LogoutIcon/>
            </ListItemIcon>
            <ListItemText primary={'Logout'}/>
        </ListItemButton>
    );
};

export default Logout;