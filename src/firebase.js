import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOSOZrQtF7_WAZ_ZoIfQBhGzGhmcpiQoQ",
  authDomain: "auth-29e6e.firebaseapp.com",
  projectId: "auth-29e6e",
  storageBucket: "auth-29e6e.appspot.com",
  messagingSenderId: "554284358841",
  appId: "1:554284358841:web:1845be3cdc576e15430f68",
  measurementId: "G-YB8JTZ020E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
