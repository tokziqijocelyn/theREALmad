import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCPgcrBv-Rq_K43xMkgbIthTf0evJ98g3Q",
    authDomain: "madca3-acdcb.firebaseapp.com",
    projectId: "madca3-acdcb",
    storageBucket: "madca3-acdcb.appspot.com",
    messagingSenderId: "578712815530",
    appId: "1:578712815530:web:4af99f4d12a7b119b84dd3",
    measurementId: "G-HLVW1TS4H2"
  };

//Initialize Firebase
let fireBaseApp;
if (!firebase.apps.length) {
  fireBaseApp = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app(); // if already initialized, use that one
}


export default fireBaseApp;