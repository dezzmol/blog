import React, {FC} from 'react';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import CreateIcon from '@mui/icons-material/Create';
import ListItemText from "@mui/material/ListItemText";
import {useNavigate} from "react-router-dom";

const CreatePost: FC = () => {
    const navigate = useNavigate()

    return (
        <ListItemButton onClick={() => navigate('/create')}>
            <ListItemIcon>
                <CreateIcon/>
            </ListItemIcon>
            <ListItemText primary={'Create post'}/>
        </ListItemButton>
    );
};

export default CreatePost;