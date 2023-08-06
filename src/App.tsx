import React, {useMemo, useState} from 'react';
import {BrowserRouter} from "react-router-dom";

import './App.css'
import AppRouter from "./components/AppRouter";
import SideBar from "./modules/Sidebar/components/Sidebar";
import {getDesignTokens} from "./theme/theme";
import {useAppSelector} from "./hooks/useTyped";
import {createTheme, ThemeProvider} from "@mui/material";
import {PaletteMode} from '@mui/material/'
import {useTheme} from "./hooks/useTheme";

const App = () => {

    const [childTitle, setChildTitle] = useState<string>('');
    const handleChildTitleChange = (title: string) => {
        setChildTitle(title);
    };
    const theme = useTheme()

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <SideBar title={childTitle}>
                    <AppRouter onTitleChange={handleChildTitleChange}/>
                </SideBar>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;