import { db } from "../firebase/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  DocumentData,
} from "firebase/firestore";

export const fetchUserName = async (userID: string | null) => {
  let userName: DocumentData[] = [];
  const querySnapshot = query(
    collection(db, "users"),
    where("userID", "==", userID)
  );
  let userNameDoc = await getDocs(querySnapshot);
  userNameDoc.forEach((doc) => userName.push(doc.data()));
  return userName;
};
