import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {getAuth} from "firebase/auth";
// import {...} from "firebase/database";
import {getFirestore} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyANJqTmrZPqZgVJgHkPRwYHmMJMTOd9nEI",
  authDomain: "todoapp-dab15.firebaseapp.com",
  projectId: "todoapp-dab15",
  storageBucket: "todoapp-dab15.appspot.com",
  messagingSenderId: "507939616149",
  appId: "1:507939616149:web:f78690f4c4b011cd84f29c",
  measurementId: "G-N5CZJN8GJQ"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
