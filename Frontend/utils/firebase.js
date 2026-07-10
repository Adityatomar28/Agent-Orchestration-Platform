// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEAXqvxLsPdqtdMBwdlTjMgvl49ISlci0",
    authDomain: "multi-ai-system.firebaseapp.com",
    projectId: "multi-ai-system",
    storageBucket: "multi-ai-system.firebasestorage.app",
    messagingSenderId: "1054780112972",
    appId: "1:1054780112972:web:e6199e22234f8211d4b4e9",
    measurementId: "G-5LEXKDD2HS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export default auth;
export { googleProvider };