export interface ChildComponentProps {
    onTitleChange: (title: string) => void;
}

export interface IComments {
    body: string;
    userID: string;
    userDisplayName: string;
}