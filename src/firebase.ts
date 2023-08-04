import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import 'firebase/compat/firestore';

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
export const db = getFirestore(app);
export const auth = getAuth()

export default app