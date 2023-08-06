import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {privatePages, publicPages} from "../routes";
import {useAppSelector} from "../hooks/useTyped";
import {ChildComponentProps} from "../types";

const AppRouter = ({onTitleChange}: ChildComponentProps) => {
    const isAuth = useAppSelector(state => state.auth.isAuth)

    return (
        <Routes>
            {isAuth
                ? privatePages.map(route =>
                    <Route
                        path={route.path}
                        element={<route.component onTitleChange={onTitleChange}/>}
                        key={route.path}
                    />
                )
                :
                publicPages.map(route =>
                    <Route
                        path={route.path}
                        element={<route.component onTitleChange={onTitleChange}/>}
                        key={route.path}
                    />
                )
            }
        </Routes>
    );
};

export default AppRouter;