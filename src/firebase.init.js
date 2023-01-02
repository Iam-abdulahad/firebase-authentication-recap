// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS3-xkzp9TVSgYxQBbY7PcOKnsXbYrdUI",
  authDomain: "fir-authentication-recap-7b4b8.firebaseapp.com",
  projectId: "fir-authentication-recap-7b4b8",
  storageBucket: "fir-authentication-recap-7b4b8.appspot.com",
  messagingSenderId: "972977733052",
  appId: "1:972977733052:web:b80dc7fad34cd5a702bfb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;