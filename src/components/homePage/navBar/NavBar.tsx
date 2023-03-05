import { ref, getDownloadURL } from "firebase/storage";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { storage } from "../../../firebase/firebase";
import { SearchBar } from "./SearchBar";
import { Navigation } from "./Navigation";
import Settings from "./Settings";
import styles from "../../../styles/homePage/navBar/navBar.module.css";
import { useEffect, useState } from "react";

export const NavBar = () => {
  const [profileImageURL, setProfileImageURL] = useState<string>();
  const [surname, setSurname] = useState<string>();
  const [firstName, setFirstName] = useState<string>();
  useEffect(() => {
    const userID = localStorage.getItem("UserID");
    getUserImage(userID);
    getUserName(userID);
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
          console.log(userData);
          setSurname(userData.surname);
          setFirstName(userData.firstName);
        })
      )
      .catch((err) => console.log(err));
  };
  return (
    <div className={styles.navbar}>
      <SearchBar />
      <Navigation />
      <Settings
        profilePicture={profileImageURL as string}
        userImage={profileImageURL!}
        surname={surname}
        firstName={firstName}
      />
    </div>
  );
};
