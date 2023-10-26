import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAoIJy9x3vI8twGo8JUBf5pOseo8FsPOR0",
    authDomain: "whatsapp-clone-6ef3b.firebaseapp.com",
    projectId: "whatsapp-clone-6ef3b",
    storageBucket: "whatsapp-clone-6ef3b.appspot.com",
    messagingSenderId: "379153533221",
    appId: "1:379153533221:web:5ae4b67404ed71a090b2cc",
    measurementId: "G-X3374BKG0F"
  };

  const app = initializeApp(firebaseConfig);
  export const firebaseAuth = getAuth(app);