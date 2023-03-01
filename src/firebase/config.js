// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAM7G3LUlx1TCxuQ-rL2UQJKmaaKJQP4nM',
  authDomain: 'react-curso-b3e74.firebaseapp.com',
  projectId: 'react-curso-b3e74',
  storageBucket: 'react-curso-b3e74.appspot.com',
  messagingSenderId: '328459692994',
  appId: '1:328459692994:web:1ffcd8a75d03ffc6ee845b',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
