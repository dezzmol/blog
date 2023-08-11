import React, {FC} from 'react';
import {Paper} from "@mui/material";
import Typography from "@mui/material/Typography";

interface AboutProps {
    isOpen: boolean;
    authorDisplayName: string;
}

const About: FC<AboutProps> = ({isOpen, authorDisplayName}) => {
    return (
        <Paper style={{padding: '16px', display: isOpen ? 'block' : 'none'}}>
            <Typography variant="h6">About</Typography>
            Author: {authorDisplayName}
        </Paper>
    );
};

export default About;