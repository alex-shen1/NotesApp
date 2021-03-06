import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

export const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "notes-b92de.firebaseapp.com",
    databaseURL: "https://notes-b92de.firebaseio.com",
    projectId: "notes-b92de",
    storageBucket: "notes-b92de.appspot.com",
    messagingSenderId: "385799185287",
    appId: "1:385799185287:web:cc2289b1b0750dcc82e922",
    measurementId: "G-ED2QY807XE"
};

firebase.initializeApp(firebaseConfig)

export const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider()
}

export const firebaseAppAuth = firebase.auth();
export default firebase;