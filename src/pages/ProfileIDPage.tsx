import React, {FunctionComponent, useEffect, useState} from 'react';
import {ChildComponentProps} from "../types";

const ProfileIdPage: FunctionComponent<ChildComponentProps> = ({onTitleChange}) => {
    const [title, setTitle] = useState<string>('Profile');

    useEffect(() => {
        onTitleChange(title);
    }, [])
    return (
        <div>

        </div>
    );
};

export default ProfileIdPage;