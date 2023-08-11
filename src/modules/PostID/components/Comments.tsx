import React, {FC} from 'react';
import {IComments} from "../../../types";
import {Paper} from "@mui/material";
import CommentForm from "./CommentForm";

interface CommentsProps {
    comments: IComments[];
}

const Comments: FC<CommentsProps> = ({comments}) => {
    return (
        <Paper style={{padding: '16px'}}>
            <CommentForm/>
            <h2>Comments:</h2>
            {comments.map(comment =>
                <div>
                    <h4>{comment.userDisplayName}</h4>
                    {comment.body}
                </div>

            )}
        </Paper>
    );
};

export default Comments;