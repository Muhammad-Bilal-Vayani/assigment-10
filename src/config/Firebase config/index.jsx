// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAalg7C-2LLbYWXOe5qhq0vyPJzFARgTLg",
  authDomain: "todo-app-16df7.firebaseapp.com",
  projectId: "todo-app-16df7",
  storageBucket: "todo-app-16df7.appspot.com",
  messagingSenderId: "284279848838",
  appId: "1:284279848838:web:120256ec10b12ab7047607",
  measurementId: "G-DQY6ZGF7XJ"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const auth = getAuth(firebase_app);


export {firebase_app, auth}