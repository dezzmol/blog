import React, {FunctionComponent, useEffect, useState} from 'react';
import {ChildComponentProps} from "../types";
import Container from "@mui/material/Container";
import {UserProfile} from "../modules/UserProfile";
import {auth} from "../firebase";


const Profile: FunctionComponent<ChildComponentProps> = ({onTitleChange}) => {
    const [title, setTitle] = useState<string>('Profile');

    const user = auth.currentUser

    useEffect(() => {
        onTitleChange(title);
    }, [])
    return (
        <Container>
            <UserProfile
                displayName={user!.displayName}
                email={user!.email}
                phoneNumber={user!.phoneNumber}
                photoURL={user!.photoURL}
                providerId={user!.providerId}
                uid={user!.uid}/>
        </Container>
    );
};

export default Profile;