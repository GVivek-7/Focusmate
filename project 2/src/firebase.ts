import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA74piA6qGDa8DnUiTbjlLGNf0RMuqxOcI",
  authDomain: "studybuddyfinder-bcd4f.firebaseapp.com",
  projectId: "studybuddyfinder-bcd4f",
  storageBucket: "studybuddyfinder-bcd4f.firebasestorage.app",
  messagingSenderId: "287983123779",
  appId: "1:287983123779:web:75554a6f04450c91bd03f6",
  measurementId: "G-5P820E56QY"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);