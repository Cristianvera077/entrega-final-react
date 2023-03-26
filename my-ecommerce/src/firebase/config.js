// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6zSpnqNu48RgncVm0HzLc1ju6rdQ6PPo",
  authDomain: "proyectofinalreact-a1ab3.firebaseapp.com",
  projectId: "proyectofinalreact-a1ab3",
  storageBucket: "proyectofinalreact-a1ab3.appspot.com",
  messagingSenderId: "34243193906",
  appId: "1:34243193906:web:95ad23555be45deb61202b",
  measurementId: "G-N07X96GR39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);