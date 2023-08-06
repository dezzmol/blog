import {FunctionComponent} from "react";
import Feed from "../pages/Feed";
import Profile from "../pages/Profile";
import ProfileIDPage from "../pages/ProfileIDPage";
import RegistrationPage from "../pages/RegistrationPage";
import NotFoundPage from "../pages/NotFoundPage";
import {redirect} from "react-router-dom";
import RedirectPage from "../pages/RedirectPage";
import {ChildComponentProps} from "../types";

interface IPages {
    path: string;
    component: FunctionComponent<ChildComponentProps>;
}

export const publicPages: IPages[] = [
    {path: '/*', component: RedirectPage},
    {path: '/login', component: RegistrationPage}
]

export const privatePages: IPages[] = [
    {path: '/*', component: NotFoundPage},
    {path: '/feed', component: Feed},
    {path: '/profile', component: Profile},
    {path: '/:id', component: ProfileIDPage},
]

