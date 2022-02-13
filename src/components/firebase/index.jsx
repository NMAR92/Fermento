//instalar esto!!
//npm install firebase@8.10.0 --save
import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBv5kYGQmIJDXvDLra4ST_azgmvqVA8VpE",
    authDomain: "fermento-2022.firebaseapp.com",
    projectId: "fermento-2022",
    storageBucket: "fermento-2022.appspot.com",
    messagingSenderId: "930564675666",
    appId: "1:930564675666:web:88ce8f70fec181ecd9678b"
  }

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);

