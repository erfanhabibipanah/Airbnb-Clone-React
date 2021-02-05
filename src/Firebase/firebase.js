import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBu-n9R4MZWpkl1bQnsnsbvA1rNZbzv9rQ",
  authDomain: "airbnb-clone-3b98b.firebaseapp.com",
  projectId: "airbnb-clone-3b98b",
  storageBucket: "airbnb-clone-3b98b.appspot.com",
  messagingSenderId: "579133266374",
  appId: "1:579133266374:web:8d74e2f81c21199e3cfac7",
  measurementId: "G-S66EQJGCJM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const storage = firebaseApp.storage();
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
export default db;
