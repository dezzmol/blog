import React, {FunctionComponent} from 'react';
import {Navigate} from "react-router-dom";

const NotFoundPage: FunctionComponent = () => {
    return (
        <div>
            <Navigate to='/feed' replace={true}/>
        </div>
    );
};

export default NotFoundPage;