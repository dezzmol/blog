import React, {FC, useState} from 'react';
import {Paper, Select, SelectChangeEvent, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";

interface FiltersProps {
    isOpen: boolean;
    onChange: (value: string) => void;
}

const PostFilter: FC<FiltersProps> = ({isOpen, onChange}) => {
    const [selectFilter, setSelectFilter] = useState<number | string>(15)

    return (
        <Paper style={{ padding: '16px', display: isOpen ? 'block' : 'none' }}>
            <Typography variant="h6">Search&Filters</Typography>
            <TextField
                size={"small"}
                margin={"dense"}
                label={'Search by title'}
                onChange={(e) => onChange(e.target.value)}
            />
            <Typography variant='h6'>Select </Typography>
            <Select
                value={selectFilter}
                onChange={(e:SelectChangeEvent<number | string>) => setSelectFilter(e.target.value)}
                size={"small"}
                margin={'dense'}
            >
                <MenuItem value={15 as number}>15</MenuItem>
                <MenuItem value={25 as number}>25</MenuItem>
                <MenuItem value={50 as number}>50</MenuItem>
            </Select>
        </Paper>
    );
};

export default PostFilter;