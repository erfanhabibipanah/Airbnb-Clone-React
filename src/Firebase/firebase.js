import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDUr_Pi4bJeuwchfdjf6wh-zmSd24I3W7I",
    authDomain: "airbnb-app-f6745.firebaseapp.com",
    databaseURL: "https://airbnb-app-f6745.firebaseio.com",
    projectId: "airbnb-app-f6745",
    storageBucket: "airbnb-app-f6745.appspot.com",
    messagingSenderId: "754894238925",
    appId: "1:754894238925:web:eb60768ef526b9b57be584",
    measurementId: "G-KS59LLWGRG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const storage = firebaseApp.storage();
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
export default db;
