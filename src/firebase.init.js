// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3V6WqhnLRKL3-XguXfchSR8z-8UVHRA8",
    authDomain: "user-email-pass-auth-cafba.firebaseapp.com",
    projectId: "user-email-pass-auth-cafba",
    storageBucket: "user-email-pass-auth-cafba.appspot.com",
    messagingSenderId: "631788219829",
    appId: "1:631788219829:web:4af142b55bd43352d63dfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;