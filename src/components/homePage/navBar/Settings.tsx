import {
  Menu,
  Messenger,
  Notifications,
  DefaultProfilePicture,
} from "../../../utils/svgsFunction";
import styles from "../../../styles/homePage/navBar/settings.module.css";

const Settings = () => {
  return (
    <div className={styles.settings}>
      <div>
        <Menu />
      </div>
      <div>
        <Messenger />
      </div>
      <div>
        <Notifications />
      </div>
      <div>
        <DefaultProfilePicture />
      </div>
    </div>
  );
};

export default Settings;
