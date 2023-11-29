// Import the required Firebase modules
import firebase from 'firebase/app';
import 'firebase/firestore';


// Replace with your Firebase project config
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process,
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export Firestore for use in components
export const firestore = firebase.firestore();
