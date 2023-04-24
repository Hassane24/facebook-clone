import {
  Menu,
  Messenger,
  Notifications,
  DefaultProfilePicture,
} from "../../../utils/svgsFunction";
import styles from "../../../styles/homePage/navBar/settings.module.css";
import { useState } from "react";
import { AccountPopUp } from "./AccountPopUp";

interface SettingsProps {
  userImage: string | undefined;
  profilePicture: string | undefined;
  firstName: string | undefined;
  surname: string | undefined;
}

const Settings = ({
  userImage,
  profilePicture,
  firstName,
  surname,
}: SettingsProps) => {
  const [showPopUp, setShowPopUp] = useState<Boolean>(false);
  const [showMenuText, setShowMenuText] = useState(false);
  const [showMessengerText, setShowMessengerText] = useState(false);
  const [showAccountText, setShowAccountText] = useState(false);
  const [showNotificationText, setShowNotificationText] = useState(false);

  const revealMenuText = () => setShowMenuText(true);
  const hideMenuText = () => setShowMenuText(false);

  const revealMessengerText = () => setShowMessengerText(true);
  const hideMessengerText = () => setShowMessengerText(false);

  const revealAccountText = () => setShowAccountText(true);
  const hideAccountText = () => setShowAccountText(false);

  const revealNotificationText = () => setShowNotificationText(true);
  const hideNotificationText = () => setShowNotificationText(false);

  const onClickHandler = () => setShowPopUp(!showPopUp);

  return (
    <div className={styles.settings}>
      <div onMouseLeave={hideMenuText} onMouseEnter={revealMenuText}>
        <Menu />
        <div
          className={`${styles.pop_up} ${
            showMenuText ? styles.active : undefined
          }`}
        >
          Menu
        </div>
      </div>
      <div onMouseLeave={hideMessengerText} onMouseEnter={revealMessengerText}>
        <Messenger />
        <div
          className={`${styles.pop_up} ${
            showMessengerText ? styles.active : undefined
          }`}
        >
          Messenger
        </div>
      </div>
      <div
        onMouseLeave={hideNotificationText}
        onMouseEnter={revealNotificationText}
      >
        <Notifications />
        <div
          className={`${styles.pop_up} ${
            showNotificationText ? styles.active : undefined
          }`}
        >
          Notifications
        </div>
      </div>
      <div
        onMouseLeave={hideAccountText}
        onMouseEnter={revealAccountText}
        onClick={onClickHandler}
      >
        <DefaultProfilePicture userImage={userImage} />
        <AccountPopUp
          profilePicture={profilePicture}
          show={showPopUp}
          firstName={firstName}
          surname={surname}
        />
        <div
          className={`${styles.pop_up} ${
            showAccountText ? styles.active : undefined
          }`}
          style={{ left: "-50%" }}
        >
          Account
        </div>
      </div>
    </div>
  );
};

export default Settings;
