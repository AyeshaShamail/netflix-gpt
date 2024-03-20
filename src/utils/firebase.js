// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_iDC1FxeVNrk8bMVYzqINE8evp_Ou4GY",
  authDomain: "cinema-gpt-ee0e6.firebaseapp.com",
  projectId: "cinema-gpt-ee0e6",
  storageBucket: "cinema-gpt-ee0e6.appspot.com",
  messagingSenderId: "820809691312",
  appId: "1:820809691312:web:cf1af5dce73224fbca8b75",
  measurementId: "G-VWRLK5DK91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
