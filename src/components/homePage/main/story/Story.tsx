import { CreateStroyCard } from "./CreateStoryCard";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../firebase/firebase";
import { useEffect, useState } from "react";

import { StoryReel } from "./StoryReel";
import styles from "../../../../styles/homePage/main/story.module.css";
export const Story = () => {
  const [profileImageURL, setProfileImageURL] = useState<string>("");

  useEffect(() => {
    const userID = localStorage.getItem("UserID");
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

  return (
    <div className={styles.story}>
      <StoryReel />
      <CreateStroyCard userImageUrl={profileImageURL} />
    </div>
  );
};
