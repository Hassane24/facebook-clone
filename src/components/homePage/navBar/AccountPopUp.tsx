import styles from "../../../styles/homePage/navBar/accountPopUp.module.css";
import {
  Display,
  Feedback,
  Help,
  Logout,
  Settings,
} from "../../../utils/svgsFunction";
interface PopUp {
  show: Boolean;
  left: number;
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
                <img src="" alt="" width="40px" height="40px" />
                <span>Hassane Ben</span>
              </div>
            </a>
            <div className={styles.thinLine}></div>
            <div className={styles.seeAllProfiles}>See all profiles</div>
          </div>
          <div>
            <Settings />
            <span>Settings & privacy</span>
          </div>
          <div>
            <Help />
            <span>Help & support</span>
          </div>
          <div>
            <Display />
            <span>Display & accessibility</span>
          </div>
          <div>
            <Feedback />
            <span>Give feedback</span>
          </div>
          <div>
            <Logout />
            <span>Log Out</span>
          </div>
        </div>
      )}
    </div>
  );
};
