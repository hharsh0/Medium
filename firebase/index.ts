// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDE5sEORvaV7mDZMdnek1gYtv2Ey5IRUM",
  authDomain: "springbootcrud-7ec6c.firebaseapp.com",
  projectId: "springbootcrud-7ec6c",
  storageBucket: "springbootcrud-7ec6c.appspot.com",
  messagingSenderId: "959260690615",
  appId: "1:959260690615:web:d0953494aa4e4771312532",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export {auth, provider};

