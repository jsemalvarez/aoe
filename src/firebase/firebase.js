import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBMhcASye3jyZjZbtSUvBXPxdilDyiwMEk",
    authDomain: "libro-n-aoe.firebaseapp.com",
    databaseURL: "https://libro-n-aoe.firebaseio.com",
    projectId: "libro-n-aoe",
    storageBucket: "libro-n-aoe.appspot.com",
    messagingSenderId: "399703644072",
    appId: "1:399703644072:web:cb43cc0879520b4e2cef9d"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}