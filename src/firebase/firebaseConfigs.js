import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyB4eGCMu2pC_oY2bnfLrBZutamf6WMym68",
  authDomain: "fakenetflix-28f67.firebaseapp.com",
  projectId: "fakenetflix-28f67",
  storageBucket: "fakenetflix-28f67.appspot.com",
  messagingSenderId: "371345187015",
  appId: "1:371345187015:web:ec2dda8eccc0dba087dee2"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)