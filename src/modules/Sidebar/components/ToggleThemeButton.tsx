import React, {FC} from 'react';
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import {useAppDispatch, useAppSelector} from "../../../hooks/useTyped";
import {Brightness4, Brightness7} from "@mui/icons-material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {toggleTheme} from "../../../store/slice/themeSlice";

const ToggleThemeButton: FC = () => {
    const darkTheme = useAppSelector(state => state.theme.darkTheme)
    const dispatch = useAppDispatch()

    return (
        <ListItemButton onClick={() => dispatch(toggleTheme())}>
            <ListItemIcon>
                {darkTheme ? <Brightness4/> : <Brightness7/>}
            </ListItemIcon>
            <ListItemText primary={darkTheme ? 'Light theme' : 'Dark theme'}/>
        </ListItemButton>

    );
};

export default ToggleThemeButton;