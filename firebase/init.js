// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmuV8XeTLYs4o8Bw1yFxsOq-JRTQXo8u0",
  authDomain: "persondb-4e1f3.firebaseapp.com",
  databaseURL: "https://persondb-4e1f3-default-rtdb.firebaseio.com",
  projectId: "persondb-4e1f3",
  storageBucket: "persondb-4e1f3.appspot.com",
  messagingSenderId: "495761304291",
  appId: "1:495761304291:web:540f7206a8f69143f4f3d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;