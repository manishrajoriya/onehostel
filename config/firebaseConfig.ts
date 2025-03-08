// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, initializeAuth } from "@react-native-firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1f6ZuJzuPaOSoNsbjKXIXGZ6-vZt0VMg",
  authDomain: "onehostel-0.firebaseapp.com",
  projectId: "onehostel-0",
  storageBucket: "onehostel-0.firebasestorage.app",
  messagingSenderId: "641505847165",
  appId: "1:641505847165:web:aa5f72e6b289f1d23ace14",
  measurementId: "G-QZQ5MCD098"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = initializeAuth(app, {
  persistence: browserSessionPersistence,
  popupRedirectResolver: undefined,
});


export { app, analytics, db, storage, auth, ReactNativeAsyncStorage };