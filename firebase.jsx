// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth,GoogleAuthProvider}from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATTptt-8xCs3tS_i_aQyLM16Fp7UKjQwFE",
  authDomain: "chat-app-2ade2.firebaseapp.com",
  projectId: "chat-app-2ade2",
  storageBucket: "chat-app-2ade2.firebasestorage.app",
  messagingSenderId: "128084568027",
  appId: "1:128084568027:web:cdcc4a83839edb03d729fe",
  measurementId: "G-SHV2EN0W4V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
