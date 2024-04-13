// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBroDNjpMHojuSoEBSDrL9e5Vp15uoxFYk",
  authDomain: "react-dragon-news-auth-ecc2e.firebaseapp.com",
  projectId: "react-dragon-news-auth-ecc2e",
  storageBucket: "react-dragon-news-auth-ecc2e.appspot.com",
  messagingSenderId: "513748124242",
  appId: "1:513748124242:web:23fc5a8b0ce4d5d9c7d58b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;