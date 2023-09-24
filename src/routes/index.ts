import {FunctionComponent} from "react";
import Feed from "../pages/Feed";
import Profile from "../pages/Profile";
import RegistrationPage from "../pages/RegistrationPage";
import NotFoundPage from "../pages/NotFoundPage";
import RedirectPage from "../pages/RedirectPage";
import {ChildComponentProps} from "../types";
import ProfileSettings from "../pages/ProfileSettings";
import PostIDPage from "../pages/PostIDPage";
import createPostPage from "../pages/createPostPage";

interface IPages {
    path: string;
    component: FunctionComponent<ChildComponentProps>;
}

export const publicPages: IPages[] = [
    {path: '/*', component: RedirectPage},
    {path: '/login', component: RegistrationPage},
    {path: '/feed', component: Feed},
]

export const privatePages: IPages[] = [
    {path: '/*', component: NotFoundPage},
    {path: '/feed', component: Feed},
    {path: '/profile', component: Profile},
    {path: '/profile/settings', component: ProfileSettings},
    {path: '/posts/:id', component: PostIDPage},
    {path: '/create', component: createPostPage}
]

