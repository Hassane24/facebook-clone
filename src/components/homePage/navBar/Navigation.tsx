import { Friends, Groups, Home, Gaming } from "../../../utils/svgsFunction";
import styles from "../../../styles/homePage/navBar/navigation.module.css";

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div>
        <Home />
      </div>
      <div>
        <Friends />
      </div>
      <div>
        <Groups />
      </div>
      <div>
        <Gaming />
      </div>
    </div>
  );
};
