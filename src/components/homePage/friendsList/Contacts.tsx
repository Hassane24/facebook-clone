import { Call, SearchIcon, Options } from "../../../utils/svgsFunction";
import styles from "../../../styles/homePage/friendsList/contacts.module.css";

export const Contacts = () => (
  <div className={styles.contacts}>
    <span>Contacts</span>
    <div className={styles.icons}>
      <div>
        <Call />
      </div>
      <div>
        <SearchIcon />
      </div>
      <div>
        <Options />
      </div>
    </div>
  </div>
);
