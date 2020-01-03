import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAOcEDmVUQk9370yM9I4QxoCvT5bksD7Jo",
  authDomain: "crown-db-3ddf8.firebaseapp.com",
  databaseURL: "https://crown-db-3ddf8.firebaseio.com",
  projectId: "crown-db-3ddf8",
  storageBucket: "crown-db-3ddf8.appspot.com",
  messagingSenderId: "446802038068",
  appId: "1:446802038068:web:69e799009b25f282cfa961",
  measurementId: "G-9DGQEZ8YWW"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}"`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
