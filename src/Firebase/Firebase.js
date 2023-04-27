// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQlNUnE1ojwhh7rqOIYkqBkvBhtbtxbLQ",
  authDomain: "crud-firebase-react-dcc6f.firebaseapp.com",
  projectId: "crud-firebase-react-dcc6f",
  storageBucket: "crud-firebase-react-dcc6f.appspot.com",
  messagingSenderId: "73132417728",
  appId: "1:73132417728:web:bde2fa4a065bda3a2a4325"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialiser la base de donnée firestore
export const db = getFirestore(app);
