import React, {FC} from 'react';
import {IComments} from "../../../types";
import {Paper} from "@mui/material";
import CommentForm from "./CommentForm";

interface CommentsProps {
    comments: IComments[];
}

const Comments: FC<CommentsProps> = ({comments}) => {

    const toDateTime = (secs: number) => {
        let t = new Date(Date.UTC(1970, 0, 1)); // Epoch
        t.setUTCSeconds(secs);
        return t.toLocaleString('en-GB',{timeZone:'UTC'});
    }

    return (
        <Paper style={{padding: '16px'}}>
            <CommentForm/>
            <h2>Comments:</h2>
            {comments.map(comment =>
                <Paper style={{padding: '10px', marginTop: '10px'}}>
                    <h4>{comment.userDisplayName}</h4>
                    <h6>{toDateTime(comment.date.seconds)}</h6>
                    {comment.body}
                </Paper>

            )}
        </Paper>
    );
};

export default Comments;