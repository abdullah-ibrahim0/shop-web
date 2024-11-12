// src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAWdIgpNiD813y0tPgsed_KTNm60grvk_I",
  authDomain: "shop-web-b2689.firebaseapp.com",
  projectId: "shop-web-b2689",
  storageBucket: "shop-web-b2689.firebasestorage.app",
  messagingSenderId: "980772991502",
  appId: "1:980772991502:web:422f524cab0739a2b7c25f",
  measurementId: "G-YF1S0PYGGY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();  // Renamed from provider to googleProvider

export { db, auth, googleProvider, signInWithPopup };
