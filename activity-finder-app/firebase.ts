// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDv6OZBkgH3CRHIfGHKtJ4ZgODcSETHmg",
  authDomain: "activity-finder-7a987.firebaseapp.com",
  projectId: "activity-finder-7a987",
  storageBucket: "activity-finder-7a987.appspot.com",
  messagingSenderId: "16546196195",
  appId: "1:16546196195:web:6ac070a3df316c1da833d6",
  measurementId: "G-T6XWRZ9F60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);