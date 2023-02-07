import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,

  authDomain: process.env.REACT_APP_AUTH_DOMAIN,

  projectId: process.env.REACT_APP_PROJECT_ID,

  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,

  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,

  appId: process.env.REACT_APP_APPLICATION_ID,
};

// init firebase

firebase.initializeApp(firebaseConfig);

// init services

const recipeStore = firebase.firestore();

//export

export { recipeStore };
