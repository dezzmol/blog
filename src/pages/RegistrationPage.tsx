import React, {FunctionComponent, useEffect, useState} from 'react';
import {RegistrationForm} from "../modules/RegistrationForm";
import {ChildComponentProps} from "../types";

const RegistrationPage: FunctionComponent<ChildComponentProps> = ({onTitleChange}) => {
    const [title, setTitle] = useState<string>('Login');

    useEffect(() => {
        onTitleChange(title);
    }, [])

    return (
        <div>
            <RegistrationForm/>
        </div>
    )

};

export default RegistrationPage;