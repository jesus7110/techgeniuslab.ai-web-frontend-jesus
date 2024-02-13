// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection,getFirestore } from "firebase/firestore"; // Import for Firestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB70a27Ua8EWwlhamLv2_11dMelJC0RN30",
  authDomain: "ai-mbot.firebaseapp.com",
  projectId: "ai-mbot",
  storageBucket: "ai-mbot.appspot.com",
  messagingSenderId: "978001921050",
  appId: "1:978001921050:web:790d56e2134c01a1ffbda3",
  measurementId: "G-6S59N681QV",
  databseURL:"https://ai-mbot-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firestore instance
export const firestore = getFirestore(app); // Export for use in other files