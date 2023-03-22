import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQmmhI76oTbcixBN_VYtOsUlSMV6PFi48",
  authDomain: "chatgpt-messenger-app-cf1b5.firebaseapp.com",
  projectId: "chatgpt-messenger-app-cf1b5",
  storageBucket: "chatgpt-messenger-app-cf1b5.appspot.com",
  messagingSenderId: "867897309545",
  appId: "1:867897309545:web:53b2f0319a5fae67c425f8"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}