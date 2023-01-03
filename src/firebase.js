import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHOVbj8ROxEw8JA-CPppW-ala8Vin_y0I",
  authDomain: "blog-app-react-5cdaf.firebaseapp.com",
  projectId: "blog-app-react-5cdaf",
  storageBucket: "blog-app-react-5cdaf.appspot.com",
  messagingSenderId: "144358199917",
  appId: "1:144358199917:web:21b230edf963c55ce62564",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
