// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0oUru6PUDTgHmlO1ZqyOM7eGpnV_13Ck",
  authDomain: "ojhpablovera.firebaseapp.com",
  projectId: "ojhpablovera",
  storageBucket: "ojhpablovera.appspot.com",
  messagingSenderId: "1029114300082",
  appId: "1:1029114300082:web:a12017fe0f4f42da442bab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);