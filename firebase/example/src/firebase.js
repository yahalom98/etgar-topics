// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeYKvvIHfYsyeW1OHQgrGSqRExFWM6ths",
  authDomain: "etgar-jerus.firebaseapp.com",
  projectId: "etgar-jerus",
  storageBucket: "etgar-jerus.firebasestorage.app",
  messagingSenderId: "209904207585",
  appId: "1:209904207585:web:19004622e900ed1b28d9a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
