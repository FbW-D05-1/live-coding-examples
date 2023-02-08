import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// For Authentication we have only took the Email Authentication form Firebase.
const firebaseConfig = {
  apiKey: "AIzaSyCEf2ivFH8P52KM9AfuSm3y0XlKLw_KHPQ",
  authDomain: "dassana-1dd3b.firebaseapp.com",
  projectId: "dassana-1dd3b",
  storageBucket: "dassana-1dd3b.appspot.com",
  messagingSenderId: "904364066737",
  appId: "1:904364066737:web:00fe2957605856aed61f90",
};

firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

//init service for auth
const projectAuth = firebase.auth();

// init storage
const projectStorage = firebase.storage();

//timestamp
// to have a time stamp when the user logged in or out from the App and it's form Firebase
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectStorage, projectAuth, timestamp };
