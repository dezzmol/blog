import React, {FunctionComponent, useEffect, useState} from 'react';
import {ChildComponentProps} from "../types";


const Profile: FunctionComponent<ChildComponentProps> = ({onTitleChange}) => {
    const [title, setTitle] = useState<string>('Profile');

    useEffect(() => {
        onTitleChange(title);
    }, [])
    return (
        <div>
            Profile Page
        </div>
    );
};

export default Profile;