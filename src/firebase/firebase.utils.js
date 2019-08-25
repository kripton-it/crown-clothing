import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBneDs7XCXcWPR_iYRml2IkOrApkO04dh4",
  authDomain: "crown-db-2dc3f.firebaseapp.com",
  databaseURL: "https://crown-db-2dc3f.firebaseio.com",
  projectId: "crown-db-2dc3f",
  storageBucket: "crown-db-2dc3f.appspot.com",
  messagingSenderId: "285439119895",
  appId: "1:285439119895:web:b197b5a9ec09a861"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdTime = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdTime,
        ...additionalData
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  return userRef;
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollections = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      title,
      items,
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id
    };
  });

  return transformedCollections.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

// универсальная функция для добавления любых коллекций в firestore
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
