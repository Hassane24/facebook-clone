import { AddStoryIcon } from "../../../../utils/svgsFunction";
import styles from "../../../../styles/homePage/main/createStoryCard.module.css";
import profilePic from "../../../../assets/Default_pfp.png";
export const CreateStroyCard = () => {
  return (
    <div style={{ display: "flex", margin: "16px auto 16px 16px" }}>
      <div className={styles.createStoryCard}>
        <div className={styles.imageHolder}>
          <img src={profilePic} alt="" />
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
