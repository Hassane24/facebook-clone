import { CreateStroyCard } from "./CreateStoryCard";
import { StoryReel } from "./StoryReel";
import { fetchUserImage } from "../../../../utils/fetchUserImage";
import { useEffect, useState } from "react";
import styles from "../../../../styles/homePage/main/story/story.module.css";
export const Story = () => {
  const [profileImageURL, setProfileImageURL] = useState<string>("");

  useEffect(() => {
    const userID = localStorage.getItem("UserID");
    const getUserImage = async () => await fetchUserImage(userID);
    getUserImage().then((imageLink) => setProfileImageURL(imageLink));
  }, []);

  return (
    <div className={styles.story}>
      <StoryReel />
      <CreateStroyCard userImageUrl={profileImageURL} />
    </div>
  );
};
