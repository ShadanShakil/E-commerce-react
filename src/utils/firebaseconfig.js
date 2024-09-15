import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyADa9uN5e_3cRhwLeBh54Mvt3JisykpUhI",
  authDomain: "e-commerce-app-react-1fc51.firebaseapp.com",
  projectId: "e-commerce-app-react-1fc51",
  storageBucket: "e-commerce-app-react-1fc51.appspot.com",
  messagingSenderId: "129924723016",
  appId: "1:129924723016:web:da93a563f2f3964911c37d",
  measurementId: "G-9S3X5GMRC3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
