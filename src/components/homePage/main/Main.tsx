import { Story } from "./story/Story";
import styles from "../../../styles/homePage/main/main.module.css";
import { WhatsOnYourMind } from "./whatsOnYourMind/WhatsOnYourMind";

export const Main = () => {
  return (
    <div className={styles.main}>
      <Story />
      <WhatsOnYourMind />
    </div>
  );
};
