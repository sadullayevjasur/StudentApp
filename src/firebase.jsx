import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQ4KKO_c9LUvbrR6mo20bmows7iKQtFII",
  authDomain: "blog-site1.firebaseapp.com",
  projectId: "blog-site1",
  storageBucket: "blog-site1.appspot.com",
  messagingSenderId: "85336169709",
  appId: "1:85336169709:web:a85fdcb1b3736f12d880e4",
  measurementId: "G-SEGKK9Y4KZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

