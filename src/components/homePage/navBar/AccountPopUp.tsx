import styles from "../../../styles/homePage/navBar/accountPopUp.module.css";
import {
  Arrow,
  Display,
  Feedback,
  Help,
  Logout,
  Settings,
} from "../../../utils/svgsFunction";
import DefaultPic from "../../../assets/Default_pfp.png";
interface PopUp {
  show: Boolean;
  left: number;
  profilePicture: string;
}
export const AccountPopUp = (props: PopUp) => {
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
                <img
                  src={props.profilePicture || DefaultPic}
                  width="40px"
                  height="40px"
                  style={{ borderRadius: "50%" }}
                />
                <span>Hassane Ben</span>
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
            <div style={{ backgroundColor: "transparent" }}>
              <Arrow />
            </div>
          </div>
          <div className={styles.settingsOptions}>
            <div>
              <Help />
            </div>
            <span>Help & support</span>
            <div style={{ backgroundColor: "transparent" }}>
              <Arrow />
            </div>
          </div>
          <div className={styles.settingsOptions}>
            <div>
              <Display />
            </div>
            <span>Display & accessibility</span>
            <div style={{ backgroundColor: "transparent" }}>
              <Arrow />
            </div>
          </div>
          <div className={styles.settingsOptions}>
            <div>
              <Feedback />
            </div>
            <span>Give feedback</span>
          </div>
          <div className={styles.settingsOptions}>
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
