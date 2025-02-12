// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAqWbOsOVhKElgJYqHXuuKEXs9GaOJ45nw",
  authDomain: "fitness-530d8.firebaseapp.com",
  projectId: "fitness-530d8",
  storageBucket: "fitness-530d8.firebasestorage.app",
  messagingSenderId: "564852293115",
  appId: "1:564852293115:web:4dad203ec0fd54ca2bdf5e",
  measurementId: "G-GX26S5JSN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app