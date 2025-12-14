// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDWOnXOIXb6U9X4AdXbYauOujOY45E6pLY",
  authDomain: "fullstack-clone-d8e63.firebaseapp.com",
  projectId: "fullstack-clone-d8e63",
  storageBucket: "fullstack-clone-d8e63.firebasestorage.app",
  messagingSenderId: "23882239778",
  appId: "1:23882239778:web:e7aded08493d10e6061f7b",
  measurementId: "G-74H7Z880DC",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
