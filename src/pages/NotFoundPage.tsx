import React, {FunctionComponent, useEffect, useState} from 'react';
import {Navigate} from "react-router-dom";
import {ChildComponentProps} from "../types";

const NotFoundPage: FunctionComponent<ChildComponentProps> = ({onTitleChange}) => {
    const [title, setTitle] = useState<string>('Feed');

    useEffect(() => {
        onTitleChange(title);
    }, [])
    return (
        <div>
            <Navigate to='/feed' replace={true}/>
        </div>
    );
};

export default NotFoundPage;