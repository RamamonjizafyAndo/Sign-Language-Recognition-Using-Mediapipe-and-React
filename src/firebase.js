import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDzDrlpShA-b2UMO4bOv-YqfJL7WVJj8tk",
  authDomain: "langage-recognition.firebaseapp.com",
  projectId: "langage-recognition",
  storageBucket: "langage-recognition.appspot.com",
  messagingSenderId: "741244293387",
  appId: "1:741244293387:web:c54cb3eb4364d2d23c120e"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db};

