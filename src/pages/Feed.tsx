import React, {FC, useEffect, useState} from 'react';
import {ChildComponentProps} from "../types";

const Feed: FC<ChildComponentProps> = ({onTitleChange}) => {
    const [title, setTitle] = useState<string>('Feed');

    useEffect(() => {
        onTitleChange(title);
    }, [])

    return (
        <div>
            Feed page
        </div>
    );
};

export default Feed;