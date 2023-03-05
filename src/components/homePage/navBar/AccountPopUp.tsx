import styles from "../../../styles/homePage/navBar/accountPopUp.module.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/firebase";
import { signOut } from "firebase/auth";
import {
  Arrow,
  DefaultProfilePicture,
  Display,
  Feedback,
  Help,
  Logout,
  Settings,
} from "../../../utils/svgsFunction";
interface PopUp {
  show: Boolean;
  left: number;
  profilePicture: string;
  surname: string | undefined;
  firstName: string | undefined;
}
export const AccountPopUp = (props: PopUp) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("UserID");
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      {props.show && (
        <div
          style={{
            left: props.left,
          }}
          className={styles.accountPopUp}
        >
          <div className={styles.yourAccount}>
            <a href="">
              <div>
                <DefaultProfilePicture userImage={props.profilePicture} />
                <span>
                  {props.firstName} {props.surname}
                </span>
              </div>
            </a>
            <div className={styles.thinLine}></div>
            <div className={styles.seeAllProfiles}>See all profiles</div>
          </div>
          <div className={styles.settingsOptions}>
            <div>
              <Settings />
            </div>
            <span>Settings & privacy</span>
            <div
              style={{
                backgroundColor: "transparent",
                position: "absolute",
                transform: "translate(620%)",
              }}
            >
              <Arrow />
            </div>
          </div>
          <div className={styles.settingsOptions}>
            <div>
              <Help />
            </div>
            <span>Help & support</span>
            <div
              style={{
                backgroundColor: "transparent",
                position: "absolute",
                transform: "translate(620%)",
              }}
            >
              <Arrow />
            </div>
          </div>
          <div className={styles.settingsOptions}>
            <div>
              <Display />
            </div>
            <span>Display & accessibility</span>
            <div
              style={{
                backgroundColor: "transparent",
                position: "absolute",
                transform: "translate(620%)",
              }}
            >
              <Arrow />
            </div>
          </div>
          <div className={styles.settingsOptions}>
            <div>
              <Feedback />
            </div>
            <span>Give feedback</span>
          </div>
          <div className={styles.settingsOptions} onClick={clickHandler}>
            <div>
              <Logout />
            </div>
            <span>Log Out</span>
          </div>
        </div>
      )}
    </div>
  );
};
