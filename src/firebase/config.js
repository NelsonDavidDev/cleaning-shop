// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxUf39ATfpRwD-QWqNVs2Dfzmhye0hjBw",
  authDomain: "online-shop-b6c3e.firebaseapp.com",
  projectId: "online-shop-b6c3e",
  storageBucket: "online-shop-b6c3e.appspot.com",
  messagingSenderId: "511403252283",
  appId: "1:511403252283:web:1ea54d0f2d6d9011f35a1e",
  measurementId: "G-98FF7GJYN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();