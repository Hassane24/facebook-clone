import { Reels, Stories } from "../../../../utils/svgsFunction";
import styles from "../../../../styles/homePage/main/story/storyReel.module.css";
export const StoryReel = () => {
  return (
    <div className={styles.storyreel}>
      <div style={{ borderBottom: "3px solid #2e89ff" }}>
        <Stories />
        <span style={{ color: "#2e89ff" }}>Stories</span>
      </div>
      <div className={styles.onhover}>
        <Reels />
        <span>Reels</span>
      </div>
    </div>
  );
};
