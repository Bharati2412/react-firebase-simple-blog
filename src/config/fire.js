import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDxvM0CSbzgzpEQHcX7w7X_Z2km1EwB2bs",
  authDomain: "admin-login-8e701.firebaseapp.com",
  projectId: "admin-login-8e701",
  storageBucket: "admin-login-8e701.appspot.com",
  messagingSenderId: "1001683531133",
  appId: "1:1001683531133:web:e9ce6280da767e0e360814",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
