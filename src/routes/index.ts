import {FunctionComponent} from "react";
import Feed from "../pages/Feed";
import Profile from "../pages/Profile";
import feed from "../pages/Feed";
import ProfileIDPage from "../pages/ProfileIDPage";
import RegistrationPage from "../pages/RegistrationPage";

interface IPages {
    path: string;
    component: FunctionComponent;
}

export const publicPages: IPages[] = [
    {path: '/*', component: feed},
    {path: '/feed', component: Feed},
    {path: '/profile', component: Profile},
    {path: '/:id', component: ProfileIDPage},
    {path: '/registration', component: RegistrationPage}
]

export const privatePages: IPages[] = [
    {path: '/*', component: feed},
    {path: '/feed', component: Feed},
    {path: '/profile', component: Profile},
    {path: '/:id', component: ProfileIDPage},
]

