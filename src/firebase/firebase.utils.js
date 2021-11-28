import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyANjFwZ8BgOpmDT7q8RNLPTtFht340PJ08",
  authDomain: "crwn-db-eb2f3.firebaseapp.com",
  projectId: "crwn-db-eb2f3",
  storageBucket: "crwn-db-eb2f3.appspot.com",
  messagingSenderId: "589963635058",
  appId: "1:589963635058:web:a0cd3112ea4f13a11c95eb",
  measurementId: "G-VECG884KYN",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
