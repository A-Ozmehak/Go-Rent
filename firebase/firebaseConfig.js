import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR-4iDT3DlJNpQYSCjxbasaorBOqLBm5w",
  authDomain: "gorent-9edb2.firebaseapp.com",
  projectId: "gorent-9edb2",
  storageBucket: "gorent-9edb2.appspot.com",
  messagingSenderId: "522627244060",
  appId: "1:522627244060:web:4df0357f01fda939333fd9",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();