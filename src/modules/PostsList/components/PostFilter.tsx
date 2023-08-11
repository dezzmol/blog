import React, {FC} from 'react';
import {Paper} from "@mui/material";
import Typography from "@mui/material/Typography";

interface FiltersProps {
    isOpen: boolean;
}

const PostFilter: FC<FiltersProps> = ({isOpen}) => {
    return (
        <Paper style={{ padding: '16px', display: isOpen ? 'block' : 'none' }}>
            <Typography variant="h6">Filters</Typography>
            {/* Add your filter components here */}
        </Paper>
    );
};

export default PostFilter;