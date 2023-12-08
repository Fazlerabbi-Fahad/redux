// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_J1rsbxnKfb8TwEd_faz18sBRwAF-ROQ",
  authDomain: "redux-4a91d.firebaseapp.com",
  projectId: "redux-4a91d",
  storageBucket: "redux-4a91d.appspot.com",
  messagingSenderId: "173617523966",
  appId: "1:173617523966:web:0a7f2ef792ad57865cc9af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
