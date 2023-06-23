// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjhXjody3EyXKXgqsUi8UHUWlkumsVTtY",
    authDomain: "lqcf-church.firebaseapp.com",
    projectId: "lqcf-church",
    storageBucket: "lqcf-church.appspot.com",
    messagingSenderId: "351267829391",
    appId: "1:351267829391:web:8e6309cb4208a6245ce2fa",
    measurementId: "G-TPTVC828EE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);