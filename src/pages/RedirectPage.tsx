import React, {FC, FunctionComponent, useEffect, useState} from 'react';
import {Navigate} from "react-router-dom";
import {ChildComponentProps} from "../types";

const RedirectPage: FunctionComponent<ChildComponentProps> = ({onTitleChange}) => {
    const [title, setTitle] = useState<string>('Redirect');

    useEffect(() => {
        onTitleChange(title);
    }, [])
    return (
        <div>
            <Navigate to={'/login'} replace={true}/>
        </div>
    );
};

export default RedirectPage;