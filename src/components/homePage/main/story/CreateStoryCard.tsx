import { AddStoryIcon } from "../../../../utils/svgsFunction";
import styles from "../../../../styles/homePage/main/story/createStoryCard.module.css";
import profilePic from "../../../../assets/default-pfp.png";
export const CreateStroyCard = ({ userImageUrl }: { userImageUrl: string }) => {
  return (
    <div style={{ display: "flex", margin: "16px auto 16px 16px" }}>
      <div className={styles.createStoryCard}>
        <div className={styles.imageHolder}>
          <img
            src={userImageUrl || profilePic}
            alt="profile picture in create story card"
          />
        </div>
        <div className={styles.addStoryIcon}>
          <AddStoryIcon />
        </div>
        <div>
          <span>Create story</span>
        </div>
      </div>
    </div>
  );
};
