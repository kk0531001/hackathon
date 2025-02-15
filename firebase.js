// Import Firebase
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// Your Firebase Config (replace with your Firebase project settings)
const firebaseConfig = {
  apiKey: "AIzaSyAYboTNWPLH8NHk7EhNWV4cua0ks36q19k",
  authDomain: "hackathon-b2ebb.firebaseapp.com",
  projectId: "hackathon-b2ebb",
  storageBucket: "hackathon-b2ebb.firebasestorage.app",
  messagingSenderId: "616274396118",
  appId: "1:616274396118:web:20684cab3c910381975a77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  // ✅ Export auth properly
export default app;  // ✅ Export app correctly