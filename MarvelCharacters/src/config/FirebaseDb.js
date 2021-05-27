import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA9kzv8TIX9LMeW-fndtV0XrI5mxq4wMuI",
  authDomain: "marvelcharacters-109e0.firebaseapp.com",
  projectId: "marvelcharacters-109e0",
  storageBucket: "marvelcharacters-109e0.appspot.com",
  messagingSenderId: "1023086440398",
  appId: "1:1023086440398:web:6a0b71784dc55ffd5bc59f",
  measurementId: "G-H1Q7BZLCND"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore()

export default firebase