import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebase_config = {
  apiKey: "AIzaSyBCWkLdS3gQ2xNDKXg9JAsrxsLhyfF_bzc",
  authDomain: "clone-app-7be93.firebaseapp.com",
  databaseURL: "https://clone-app-7be93.firebaseio.com",
  projectId: "clone-app-7be93",
  storageBucket: "clone-app-7be93.appspot.com",
  messagingSenderId: "316245655700",
  appId: "1:316245655700:web:4ff281adc74ef0fd1f3481",
  measurementId: "G-P9NLEBKW0R",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebase_config);
}

export { firebase };

//OAuth CLient Id Android : 316245655700-2d78emuuk1flopf0aq4o0d5v361omgrc.apps.googleusercontent.com
