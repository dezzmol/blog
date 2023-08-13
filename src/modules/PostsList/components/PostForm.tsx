import React, {FC} from 'react';
import {Button, Card, CardActions, CardContent} from "@mui/material";
import {IPost} from "../../../store/slice/postsSlice";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";

const PostForm: FC<IPost> = (posts) => {
    const navigate = useNavigate()

    return (
        <Card style={{marginBottom: '20px'}}>
            <CardContent>
                <Typography variant={"h5"} component={"div"}>
                    {posts.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    by {posts.userDisplayName}
                </Typography>
                <Typography variant="body2">
                    {posts.body}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => navigate(`/posts/${posts.id}`)} size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default PostForm;