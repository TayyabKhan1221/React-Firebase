import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCG9n172s09jHM7L4WqkjhjnCnp9kBvNGE",
  authDomain: "react-firebase-e20f4.firebaseapp.com",
  projectId: "react-firebase-e20f4",
  storageBucket: "react-firebase-e20f4.appspot.com",
  messagingSenderId: "349317239311",
  appId: "1:349317239311:web:df063fa914813fa06b097a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
