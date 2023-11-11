// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxN8a5PuoRQoHZWH5z_xRIPSnGkns6QbI",
    authDomain: "peyme-847bd.firebaseapp.com",
    projectId: "peyme-847bd",
    storageBucket: "peyme-847bd.appspot.com",
    messagingSenderId: "978315886192",
    appId: "1:978315886192:web:07a9baf9f7f443d5bb7eb5"
  };

// Initialize Firebase service
export const app = initializeApp(firebaseConfig);
