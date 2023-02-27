import {
  Menu,
  Messenger,
  Notifications,
  DefaultProfilePicture,
} from "../../../utils/svgsFunction";
import styles from "../../../styles/homePage/navBar/settings.module.css";
import { useState } from "react";
import { AccountPopUp } from "./AccountPopUp";

const Settings = ({ userImage }: { userImage: string }) => {
  const [showPopUp, setShowPopUp] = useState<Boolean>(false);
  const [popUpXPosition, setPopUpXPosition] = useState<number>(0);
  const [popUpYPosition, setPopUpYPosition] = useState<number>(0);

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setShowPopUp(!showPopUp);
    setPopUpXPosition(e.clientX);
    setPopUpYPosition(e.clientY + 56);
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
          show={showPopUp}
          top={popUpYPosition}
          left={popUpXPosition}
        />
      </div>
    </div>
  );
};

export default Settings;
