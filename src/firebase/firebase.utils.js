import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBneDs7XCXcWPR_iYRml2IkOrApkO04dh4",
  authDomain: "crown-db-2dc3f.firebaseapp.com",
  databaseURL: "https://crown-db-2dc3f.firebaseio.com",
  projectId: "crown-db-2dc3f",
  storageBucket: "",
  messagingSenderId: "285439119895",
  appId: "1:285439119895:web:b197b5a9ec09a861"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
