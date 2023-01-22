import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBkBt_NI3GGJoYmIKWn-CLQ95HavPcS8CE",
  authDomain: "facebook-clone-9495e.firebaseapp.com",
  projectId: "facebook-clone-9495e",
  storageBucket: "facebook-clone-9495e.appspot.com",
  messagingSenderId: "110988381764",
  appId: "1:110988381764:web:aa87b143d62949d68df611",
  measurementId: "G-6LQW1DWB4W",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const signUp = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
};
