import styles from "../../../../styles/homePage/main/postCard/postContent.module.css";

export interface PostContentProps {
  postText: string | undefined;
  postImage: string | null;
}

export const PostContent = ({ postText, postImage }: PostContentProps) => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.textContent}>{postText}</div>
      {postImage && (
        <div className={styles.imageHolder}>
          <img src={postImage} alt="" />
        </div>
      )}
    </div>
  );
};
