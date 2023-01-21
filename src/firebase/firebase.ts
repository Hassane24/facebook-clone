import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
export const auth = getAuth(app);
