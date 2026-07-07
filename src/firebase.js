// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEdQfzKJqMpolAoGHtSdCIm7VKBhOY3Hc",
  authDomain: "solex-waitlist.firebaseapp.com",
  projectId: "solex-waitlist",
  storageBucket: "solex-waitlist.firebasestorage.app",
  messagingSenderId: "437181775170",
  appId: "1:437181775170:web:9455d6cd076fecface9cdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };