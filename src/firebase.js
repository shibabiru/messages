import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBT8qtPz1G2qVeZifXX5B9Us3oTXnNQilo",
    authDomain: "messages-49b8c.firebaseapp.com",
    projectId: "messages-49b8c",
    storageBucket: "messages-49b8c.appspot.com",
    messagingSenderId: "874194472886",
    appId: "1:874194472886:web:7932b0b83a785b93abbb17"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};


