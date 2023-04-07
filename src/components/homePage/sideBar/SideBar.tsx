import {
  DefaultProfilePicture,
  SeeMoreArrow,
} from "../../../utils/svgsFunction";
import Icons from "../../../assets/side-bar-icons.png";
import { SideBarItem } from "./SideBarItem";
import { useEffect, useState } from "react";
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
    const profilePictureURL = localStorage.getItem("profile-picture");
    const firstName = localStorage.getItem("first-name");
    const surname = localStorage.getItem("surname");
    profilePictureURL === null
      ? setProfileImageURL(undefined)
      : setProfileImageURL(profilePictureURL);
    setFirstName(firstName as string);
    setSurname(surname as string);
  }, []);

  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBarItem}>
        <div>
          <DefaultProfilePicture userImage={profileImageURL} />
        </div>
        <span>
          {firstName} {surname}
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
