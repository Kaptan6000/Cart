import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as firebase from 'firebase';
// import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD4m9-wcZZG2gT_psf2ep_pMBSVARdpJ7I",
  authDomain: "cart-941da.firebaseapp.com",
  projectId: "cart-941da",
  storageBucket: "cart-941da.appspot.com",
  messagingSenderId: "1033078757453",
  appId: "1:1033078757453:web:91f72b90996206254e6404"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
