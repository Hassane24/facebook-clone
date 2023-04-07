import {
  collection,
  DocumentData,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { Contacts } from "./Contacts";
import { Friend } from "./Friend";
import { useState, useEffect } from "react";
import styles from "../../../styles/homePage/friendsList/friendsList.module.css";
export const FriendsList = () => {
  const [friendsInfo, setFriendsInfo] = useState<DocumentData[]>([]);

  useEffect(() => {
    const userID = localStorage.getItem("UserID");
    const userInfo: DocumentData[] = [];
    const documentRef = query(
      collection(db, "users"),
      where("userID", "!=", userID)
    );
    getDocs(documentRef)
      .then((docs) => {
        docs.forEach((doc) => {
          userInfo.push(doc.data());
          setFriendsInfo(userInfo);
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.friendsList}>
      <Contacts />
      <div>
        {friendsInfo.map((friend) => (
          <li key={friend.userID} style={{ listStyleType: "none" }}>
            <Friend
              friendFirstName={friend.firstName}
              friendLastName={friend.surname}
              friendImageLink={friend.imageLink}
            />
          </li>
        ))}
      </div>
    </div>
  );
};
