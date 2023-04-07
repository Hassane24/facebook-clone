import { SearchBar } from "./SearchBar";
import { Navigation } from "./Navigation";
import Settings from "./Settings";
import styles from "../../../styles/homePage/navBar/navBar.module.css";
import { useEffect, useState } from "react";

export const NavBar = () => {
  const [profileImageURL, setProfileImageURL] = useState<string | undefined>(
    ""
  );
  const [surname, setSurname] = useState<string>();
  const [firstName, setFirstName] = useState<string>();
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
