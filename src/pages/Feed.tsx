import React, {FC, useEffect, useState} from 'react';
import {ChildComponentProps} from "../types";
import {PostList} from "../modules/PostsList";
import Container from "@mui/material/Container";

const Feed: FC<ChildComponentProps> = ({onTitleChange}) => {
    const [title, setTitle] = useState<string>('Feed');

    useEffect(() => {
        onTitleChange(title);
    }, [])

    return (
        <Container>
            <PostList/>
        </Container>
    );
};

export default Feed;