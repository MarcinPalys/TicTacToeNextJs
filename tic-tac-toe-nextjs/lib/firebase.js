// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// <--- tutaj wklej swój config z konsoli Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDRNaghkdaZ_CLYsupWVd7oHfWO9ZgemB0",
  authDomain: "tic-tac-toe-nxn-b0e1c.firebaseapp.com",
  projectId: "tic-tac-toe-nxn-b0e1c",
  storageBucket: "tic-tac-toe-nxn-b0e1c.firebasestorage.app",
  messagingSenderId: "434715939488",
  appId: "1:434715939488:web:bc06ea4177912344f1efc5",
  measurementId: "G-WSHH3KM248"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
