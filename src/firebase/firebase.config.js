// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXjAhQ01cT3872LYeZAZ0bMJOkYH21P58",
  authDomain: "dragon-news-cd70c.firebaseapp.com",
  projectId: "dragon-news-cd70c",
  storageBucket: "dragon-news-cd70c.appspot.com",
  messagingSenderId: "950358807101",
  appId: "1:950358807101:web:b60ef854b0cbbc55089054"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;