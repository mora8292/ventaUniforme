// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj0V13o71naoJlqfDdah5Ob1I-cZskp8M",
  authDomain: "uniformes-calpus.firebaseapp.com",
  projectId: "uniformes-calpus",
  storageBucket: "uniformes-calpus.firebasestorage.app",
  messagingSenderId: "134191574166",
  appId: "1:134191574166:web:130c593447ffc5bfca26b7",
  measurementId: "G-7169TL6NG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const analytics = getAnalytics(app);