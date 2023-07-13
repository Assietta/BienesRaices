// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpFiYFlm3Tn4NhxHaVu_x3PdhRny96T1I",
  authDomain: "bienes-raices-85b9e.firebaseapp.com",
  projectId: "bienes-raices-85b9e",
  storageBucket: "bienes-raices-85b9e.appspot.com",
  messagingSenderId: "554638542098",
  appId: "1:554638542098:web:1dc817cccd243b6dd01fcb",
  measurementId: "G-FEWK9MZ6Q8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp