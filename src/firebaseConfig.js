import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBL-YwSNR15pKd_5Snfg3PoqiVg4FJdDk",
  authDomain: "typing-test-7c643.firebaseapp.com",
  projectId: "typing-test-7c643",
  storageBucket: "typing-test-7c643.appspot.com",
  messagingSenderId: "1022686010845",
  appId: "1:1022686010845:web:14c865e89352fafa9faa34",
  measurementId: "G-GV8JR6BXRX"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebaseApp.firestore();
export {auth, db} 