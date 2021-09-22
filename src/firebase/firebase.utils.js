import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyCqeh_ytHRx79Ch-wuHMBvD2SumjHHsp8I",
  authDomain: "crown-db-295b9.firebaseapp.com",
  projectId: "crown-db-295b9",
  storageBucket: "crown-db-295b9.appspot.com",
  messagingSenderId: "180465100384",
  appId: "1:180465100384:web:3888e0de1afacfb7fe4505",
  measurementId: "G-9DLJMVPRVS"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
// when userAuth is null
  if (!userAuth) return;


  // Get Reference
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  // Get Snapshot - Check If User Record Exist In The Db
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    // Data To Store
    const {displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
      })
    }catch (error) {
      console.log('Something went wrong when creating user', error.message)
    }
  }

  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth(); // Export Auth
export const firestore = firebase.firestore(); // Export Firestore

// Google Authentication - https://firebase.google.com/docs/auth/web/google-signin?authuser=0#web-version-9_4
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;