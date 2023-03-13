import { collection, DocumentData, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { Contacts } from "./Contacts";
import { Friend } from "./Friend";
import { useState, useEffect } from "react";
export const FriendsList = () => {
  const [friendsInfo, setFriendsInfo] = useState<DocumentData[]>([]);

  useEffect(() => {
    const userInfo: DocumentData[] = [];
    getDocs(collection(db, "users"))
      .then((docs) => {
        docs.forEach((doc) => {
          userInfo.push(doc.data());
          setFriendsInfo(userInfo);
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Contacts />
      <div>
        {friendsInfo.map((friend) => (
          <li key={friend.userID}>
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
