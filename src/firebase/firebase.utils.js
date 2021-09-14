import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyCqeh_ytHRx79Ch-wuHMBvD2SumjHHsp8I",
  authDomain: "crown-db-295b9.firebaseapp.com",
  projectId: "crown-db-295b9",
  storageBucket: "crown-db-295b9.appspot.com",
  messagingSenderId: "180465100384",
  appId: "1:180465100384:web:3888e0de1afacfb7fe4505",
  measurementId: "G-9DLJMVPRVS"
};

firebase.initialize(config);