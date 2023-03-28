import { InteractWithPost } from "./InteractWithPost";
import { PostContent } from "./PostContent";
import { PostInfo } from "./PostInfo";
import styles from "../../../../styles/homePage/main/postCard/postCard.module.css";
export const PostCard = () => {
  return (
    <div className={styles.postCardContainer}>
      <PostInfo />
      <PostContent />
      <InteractWithPost />
    </div>
  );
};
