import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import 'firebase/compat/database'
import { GoogleAuthProvider } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyCod8pXkR1mpgx4TObQIAUkffmv-vIFRjA",
    authDomain: "disney-clone-aeab6.firebaseapp.com",
    projectId: "disney-clone-aeab6",
    storageBucket: "disney-clone-aeab6.appspot.com",
    messagingSenderId: "424911066205",
    appId: "1:424911066205:web:5c1d5fbaa7134263c4e9b4"
};


const app = !firebase.apps.length ?
    firebase.initializeApp(firebaseConfig) :
    firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth"
// import "firebase/compat/firestore"
// import 'firebase/compat/database'

// const firebaseConfig = {
//     apiKey: "AIzaSyCod8pXkR1mpgx4TObQIAUkffmv-vIFRjA",
//     authDomain: "disney-clone-aeab6.firebaseapp.com",
//     projectId: "disney-clone-aeab6",
//     storageBucket: "disney-clone-aeab6.appspot.com",
//     messagingSenderId: "424911066205",
//     appId: "1:424911066205:web:5c1d5fbaa7134263c4e9b4"
// };

// const app = !firebase.apps.length ?
//     firebase.initializeApp(firebaseConfig) :
//     firebase.app();

// const db = app.firestore();

// export { db };