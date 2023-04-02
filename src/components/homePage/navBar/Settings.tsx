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
  userImage: string;
  profilePicture: string;
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

  const onClickHandler = () => setShowPopUp(!showPopUp);

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
      <div onClick={onClickHandler}>
        <DefaultProfilePicture userImage={userImage} />
        <AccountPopUp
          profilePicture={profilePicture}
          show={showPopUp}
          firstName={firstName}
          surname={surname}
        />
      </div>
    </div>
  );
};

export default Settings;
