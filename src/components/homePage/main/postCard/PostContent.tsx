import styles from "../../../../styles/homePage/main/postCard/postContent.module.css";
export const PostContent = ({
  postText,
  postImage,
}: {
  postText: string;
  postImage: string | null;
}) => {
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
