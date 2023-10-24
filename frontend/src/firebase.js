// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-31d5e.firebaseapp.com",
  projectId: "mern-auth-31d5e",
  storageBucket: "mern-auth-31d5e.appspot.com",
  messagingSenderId: "683694602116",
  appId: "1:683694602116:web:6a09e8349f6739a5e2cfd1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);