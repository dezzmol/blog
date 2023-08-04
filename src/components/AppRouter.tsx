import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privatePages, publicPages} from "../routes";
import {useAppSelector} from "../hooks/useTyped";

const AppRouter = () => {
    const isAuth = useAppSelector(state => state.authSlice.isAuth)

    return (
        <Routes>
            {isAuth
                ? privatePages.map(route =>
                    <Route
                        path={route.path}
                        element={<route.component/>}
                        key={route.path}
                    />
                )
                :
                publicPages.map(route =>
                    <Route
                        path={route.path}
                        element={<route.component/>}
                        key={route.path}
                    />
                )
            }
        </Routes>
    );
};

export default AppRouter;