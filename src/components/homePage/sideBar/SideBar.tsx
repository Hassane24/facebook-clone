import {
  DefaultProfilePicture,
  SeeMoreArrow,
} from "../../../utils/svgsFunction";
import Icons from "../../../assets/side-bar-icons.png";
import { SideBarItem } from "./SideBarItem";
import { useEffect, useState } from "react";
import styles from "../../../styles/homePage/sideBar/sideBar.module.css";
import { fetchUserImage } from "../../../utils/fetchUserImage";
import { fetchUserName } from "../../../utils/fetchUserName";

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
    const getUserName = async () => await fetchUserName(userID);
    getUserName().then((userName) => {
      setFirstName(userName[0].firstName);
      setSurname(userName[0].surname);
    });
    const getUserImage = async () => await fetchUserImage(userID);
    getUserImage().then((imageLink) => setProfileImageURL(imageLink));
  }, []);

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
