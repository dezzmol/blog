import {FunctionComponent} from "react";
import Feed from "../pages/Feed";
import Profile from "../pages/Profile";
import ProfileIDPage from "../pages/ProfileIDPage";
import RegistrationPage from "../pages/RegistrationPage";
import NotFoundPage from "../pages/NotFoundPage";

interface IPages {
    path: string;
    component: FunctionComponent;
}

export const publicPages: IPages[] = [
    {path: '/*', component: RegistrationPage},
    {path: '/login', component: RegistrationPage}
]

export const privatePages: IPages[] = [
    {path: '/*', component: NotFoundPage},
    {path: '/feed', component: Feed},
    {path: '/profile', component: Profile},
    {path: '/:id', component: ProfileIDPage},
]

