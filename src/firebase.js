import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_API_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_API_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_API_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_API_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_API_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBL2TboP0vDwXr8S6wYGAv3Fc6xFyGGgsk",
  authDomain: "cookiestore-d93cc.firebaseapp.com",
  databaseURL: "https://cookiestore-d93cc-default-rtdb.firebaseio.com",
  projectId: "cookiestore-d93cc",
  storageBucket: "cookiestore-d93cc.appspot.com",
  messagingSenderId: "968201853135",
  appId: "1:968201853135:web:bed1d76b495be7254e3fba",
  measurementId: "G-G5P0CWH63N"
}


const app = initializeApp(firebaseConfig);

export const database = getDatabase();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider }

export const dbFirestore = getFirestore(app);