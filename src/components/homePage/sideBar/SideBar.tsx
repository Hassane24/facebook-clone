import {
  DefaultProfilePicture,
  SeeMoreArrow,
} from "../../../utils/svgsFunction";
import Icons from "../../../assets/side-bar-icons.png";
import { SideBarItem } from "./SideBarItem";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { storage } from "../../../firebase/firebase";
import { ref, getDownloadURL } from "firebase/storage";
import styles from "../../../styles/homePage/sideBar/sideBar.module.css";

export const SideBar = () => {
  const [profileImageURL, setProfileImageURL] = useState<string>();
  const [surname, setSurname] = useState<string>();
  const [firstName, setFirstName] = useState<string>();
  const sideBarItemsInfo = [
    { name: "Find friends", imagePosition: "-304px" },
    { name: "Groups", imagePosition: "-76px" },
    { name: "Marketplace", imagePosition: "-418px" },
    { name: "Watch", imagePosition: "-532px" },
    { name: "Memories", imagePosition: "-456px" },
    { name: "Saved", imagePosition: "-190px" },
  ];

  useEffect(() => {
    const userID = localStorage.getItem("UserID");
    getUserName(userID);
    getUserImage(userID);
  }, []);

  const getUserImage = (userID: string | null) => {
    getDownloadURL(ref(storage, `profile-pics/${userID}.png`))
      .then((url) => {
        setProfileImageURL(url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUserName = (userID: string | null) => {
    const querySnapshot = query(
      collection(db, "users"),
      where("userID", "==", userID)
    );
    getDocs(querySnapshot)
      .then((docs) =>
        docs.forEach((doc) => {
          const userData = doc.data();
          setSurname(userData.surname);
          setFirstName(userData.firstName);
        })
      )
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBarItem}>
        <div>
          <DefaultProfilePicture userImage={profileImageURL} />
        </div>
        <span>
          {surname} {firstName}
        </span>
      </div>
      <SideBarItem sideBarItemName="Most recent" />
      {sideBarItemsInfo.map((item, index) => (
        <li key={index} style={{ listStyleType: "none" }}>
          <SideBarItem
            sideBarItemName={item.name}
            imagePosition={item.imagePosition}
            icons={Icons}
          />
        </li>
      ))}
      <div className={styles.sideBarItem}>
        <div>
          <SeeMoreArrow />
        </div>
        <span>See more</span>
      </div>
    </div>
  );
};
