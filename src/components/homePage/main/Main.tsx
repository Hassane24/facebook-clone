import { Story } from "./story/Story";
import styles from "../../../styles/homePage/main/main.module.css";

export const Main = () => {
  return (
    <div className={styles.main}>
      <Story />
    </div>
  );
};
