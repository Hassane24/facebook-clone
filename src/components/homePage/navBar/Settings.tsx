import {
  Menu,
  Messenger,
  Notifications,
  DefaultProfilePicture,
} from "../../../utils/svgsFunction";
import styles from "../../../styles/homePage/navBar/settings.module.css";
import { useState } from "react";
import { AccountPopUp } from "./AccountPopUp";

const Settings = ({
  userImage,
  profilePicture,
}: {
  userImage: string;
  profilePicture: string;
}) => {
  const [showPopUp, setShowPopUp] = useState<Boolean>(false);
  const [popUpXPosition, setPopUpXPosition] = useState<number>(0);

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setShowPopUp(!showPopUp);
    setPopUpXPosition(e.clientX - 180);
  };
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
          left={popUpXPosition}
        />
      </div>
    </div>
  );
};

export default Settings;
