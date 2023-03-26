import { Story } from "./story/Story";
import styles from "../../../styles/homePage/main/main.module.css";
import { WhatsOnYourMind } from "./whatsOnYourMind/WhatsOnYourMind";
import { PostCard } from "./postCard/PostCard";

export const Main = () => {
  return (
    <div className={styles.main}>
      <Story />
      <WhatsOnYourMind />
      <PostCard />
    </div>
  );
};
