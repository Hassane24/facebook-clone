import { CreateStroyCard } from "./CreateStoryCard";
import { StoryReel } from "./StoryReel";
import { useEffect, useState } from "react";
import styles from "../../../../styles/homePage/main/story/story.module.css";
export const Story = () => {
  const [profileImageURL, setProfileImageURL] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const profilePictureURL = localStorage.getItem("profile-picture");

    profilePictureURL === null
      ? setProfileImageURL(undefined)
      : setProfileImageURL(profilePictureURL);
  }, []);

  return (
    <div className={styles.story}>
      <StoryReel />
      <CreateStroyCard userImageUrl={profileImageURL} />
    </div>
  );
};
