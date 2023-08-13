import React, {FC, useEffect, useState} from 'react';
import Container from "@mui/material/Container";
import {CreatePostForm} from "../modules/createPost";
import {ChildComponentProps} from "../types";

const CreatePostPage: FC<ChildComponentProps> = ({onTitleChange}) => {
    const [title, setTitle] = useState<string>('Create a post');

    useEffect(() => {
        onTitleChange(title);
    }, [])


    return (
        <Container>
            <CreatePostForm/>
        </Container>
    );
};

export default CreatePostPage;