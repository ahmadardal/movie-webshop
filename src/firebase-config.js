import { initializeApp } from "firebase/app";
import  { getFirestore } from '@firebase/firestore';

// Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD1IIw0Zt6vBPjDwQLcEPw_fYOj1KU7crc",
  authDomain: "movie-shop-dfb2e.firebaseapp.com",
  projectId: "movie-shop-dfb2e",
  storageBucket: "movie-shop-dfb2e.appspot.com",
  messagingSenderId: "272477160092",
  appId: "1:272477160092:web:6d96f5aa26e541f2d1e359"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);