import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase/firebase";

import { SearchBar } from "./SearchBar";
import { Navigation } from "./Navigation";
import Settings from "./Settings";
import styles from "../../../styles/homePage/navBar/navBar.module.css";
import { useEffect, useState } from "react";

export const NavBar = () => {
  const [profileImageURL, setProfileImageURL] = useState<string>();
  useEffect(() => {
    const userID = localStorage.getItem("UserID");
    console.log(userID);
    getDownloadURL(ref(storage, `profile-pics/${userID}.png`))
      .then((url) => {
        setProfileImageURL(url);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className={styles.navbar}>
      <SearchBar />
      <Navigation />
      <Settings
        profilePicture={profileImageURL as string}
        userImage={profileImageURL!}
      />
    </div>
  );
};
