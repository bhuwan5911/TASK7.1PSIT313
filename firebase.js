import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyD4qxzgtZoMnQ9xvm1hICETkBZLcKuzb6w",
  authDomain: "qwerty-be29a.firebaseapp.com",
  projectId: "qwerty-be29a",
  storageBucket: "qwerty-be29a.appspot.com",
  messagingSenderId: "599429034942",
  appId: "1:599429034942:web:53041fd656ec26d78cbfef",
  measurementId: "G-86PK2BC7RE"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
