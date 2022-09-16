// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import { initializeApp, getApp, getApps } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCF1FAt3xxKDlJyB0kdmWJRR5gf2HNdNLY",
  authDomain: "disney-clone-b7d25.firebaseapp.com",
  projectId: "disney-clone-b7d25",
  storageBucket: "disney-clone-b7d25.appspot.com",
  messagingSenderId: "111958350551",
  appId: "1:111958350551:web:f38639ff5768632514ae92",
  measurementId: "G-CZSS3MLS00",
};

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const db = getFirestore();
// const storage = getStorage();
// console.log("firebase data");
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
