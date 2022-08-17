// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBukPbPY_Tnpn54O7n9nk6jDc9r6nqAA00",
  authDomain: "mohammed-danjuma.firebaseapp.com",
  projectId: "mohammed-danjuma",
  storageBucket: "mohammed-danjuma.appspot.com",
  messagingSenderId: "5042476730",
  appId: "1:5042476730:web:94a2e02768147773cb1483",
  measurementId: "G-MM6FKG315V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
