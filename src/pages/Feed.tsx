import React, {FC, useEffect, useState} from 'react';
import {ChildComponentProps} from "../types";

const Feed: FC<ChildComponentProps> = ({onTitleChange}) => {
    const [title, setTitle] = useState<string>('Feed');

    useEffect(() => {
        onTitleChange(title);
    }, [])

    return (
        <div>

        </div>
    );
};

export default Feed;