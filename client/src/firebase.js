// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-23c3a.firebaseapp.com",
  projectId: "mern-blog-23c3a",
  storageBucket: "mern-blog-23c3a.appspot.com",
  messagingSenderId: "365430849437",
  appId: "1:365430849437:web:4101c593d0e95296b57974"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);