import { SearchBar } from "./SearchBar";
import { Navigation } from "./Navigation";
import Settings from "./Settings";
import styles from "../../../styles/homePage/navBar/navBar.module.css";
import { useEffect, useState } from "react";
import { fetchUserImage } from "../../../utils/fetchUserImage";
import { fetchUserName } from "../../../utils/fetchUserName";

export const NavBar = () => {
  const [profileImageURL, setProfileImageURL] = useState<string>("");
  const [surname, setSurname] = useState<string>();
  const [firstName, setFirstName] = useState<string>();
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
    <div className={styles.navbar}>
      <SearchBar />
      <Navigation />
      <Settings
        profilePicture={profileImageURL}
        userImage={profileImageURL}
        surname={surname}
        firstName={firstName}
      />
    </div>
  );
};
