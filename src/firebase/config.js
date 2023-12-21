// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYsDdb4hngcFaY8aWjLfDTelMZAOJwcRU",
  authDomain: "journal-app-fea4a.firebaseapp.com",
  projectId: "journal-app-fea4a",
  storageBucket: "journal-app-fea4a.appspot.com",
  messagingSenderId: "308396088400",
  appId: "1:308396088400:web:63f6ca1e7d5d55f244c555"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );