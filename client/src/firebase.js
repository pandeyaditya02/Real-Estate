// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-285bd.firebaseapp.com",
  projectId: "mern-estate-285bd",
  storageBucket: "mern-estate-285bd.appspot.com",
  messagingSenderId: "247974781344",
  appId: "1:247974781344:web:72e78e5e5786ff367084c5",
  measurementId: "G-H09LW06SDW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);