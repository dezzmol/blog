import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyDJtaIBCUWmdks-bNXzUWHYlzw6Rbc8CXo",
    authDomain: "social-network-b7b0e.firebaseapp.com",
    projectId: "social-network-b7b0e",
    storageBucket: "social-network-b7b0e.appspot.com",
    messagingSenderId: "991001279858",
    appId: "1:991001279858:web:abaae92c7f3112c0faf1eb",
    measurementId: "G-9D9FYC85W8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth()

export const Context = createContext<any|null>(null);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Context.Provider value={{
            auth

        }}>
        <App/>
    </Context.Provider>
</React.StrictMode>
)
;


