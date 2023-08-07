import React, {FC} from 'react';
import Container from "@mui/material/Container";
import {CustomProfile} from "../modules/CustomProfile";

const ProfileSettings: FC = () => {
    return (
        <Container>
            <CustomProfile/>
        </Container>
    );
};

export default ProfileSettings;