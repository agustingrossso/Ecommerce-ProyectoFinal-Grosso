import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrYiE4a2eMfqSEuWt1MzHZ_aq3rpTDZX8",
  authDomain: "ecommerce-sunsetlights.firebaseapp.com",
  projectId: "ecommerce-sunsetlights",
  storageBucket: "ecommerce-sunsetlights.appspot.com",
  messagingSenderId: "443804159288",
  appId: "1:443804159288:web:7c8296f4ce5f488a3245cd"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
