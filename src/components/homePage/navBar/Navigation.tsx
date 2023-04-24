import { Friends, Groups, Home, Gaming } from "../../../utils/svgsFunction";
import styles from "../../../styles/homePage/navBar/navigation.module.css";
import { useState } from "react";

export const Navigation = () => {
  const [showHomeText, setShowHomeText] = useState(false);
  const [showFriendsText, setShowFriendsText] = useState(false);
  const [showGroupsText, setShowGroupsText] = useState(false);
  const [showGamingText, setShowGamingText] = useState(false);

  const revealHomeText = () => setShowHomeText(true);
  const hideHomeText = () => setShowHomeText(false);

  const revealFriendsText = () => setShowFriendsText(true);
  const hideFriendsText = () => setShowFriendsText(false);

  const revealGroupsText = () => setShowGroupsText(true);
  const hideGroupsText = () => setShowGroupsText(false);

  const revealGamingText = () => setShowGamingText(true);
  const hideGamingText = () => setShowGamingText(false);

  return (
    <div className={styles.navigation}>
      <div onMouseEnter={revealHomeText} onMouseLeave={hideHomeText}>
        <Home />
        <div className={`${styles.pop_up} ${showHomeText && styles.active}`}>
          Home
        </div>
      </div>
      <div onMouseEnter={revealFriendsText} onMouseLeave={hideFriendsText}>
        <Friends />
        <div
          className={`${styles.pop_up} ${
            showFriendsText ? styles.active : undefined
          }`}
        >
          Friends
        </div>
      </div>
      <div onMouseEnter={revealGroupsText} onMouseLeave={hideGroupsText}>
        <Groups />
        <div
          className={`${styles.pop_up} ${
            showGroupsText ? styles.active : undefined
          }`}
        >
          Groups
        </div>
      </div>
      <div onMouseEnter={revealGamingText} onMouseLeave={hideGamingText}>
        <Gaming />
        <div
          className={`${styles.pop_up} ${
            showGamingText ? styles.active : undefined
          }`}
        >
          Gaming
        </div>
      </div>
    </div>
  );
};
