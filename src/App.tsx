import React from 'react';
import {BrowserRouter} from "react-router-dom";

import './App.css'
import AppRouter from "./components/AppRouter";
import Header from "./modules/Header/components/header";
import Container from "@mui/material/Container";
import SideBar from "./modules/Sidebar/components/Sidebar";



const App = () => {
    return (
        <BrowserRouter>

            <Container>
                <SideBar>
                    <AppRouter/>
                </SideBar>
            </Container>
        </BrowserRouter>
    );
};

export default App;