import { InteractWithPost } from "./InteractWithPost";
import { PostContent } from "./PostContent";
import { PostInfo } from "./PostInfo";
import styles from "../../../../styles/homePage/main/postCard/postCard.module.css";

interface postCardProps {
  firstName: string;
  surname: string;
  pfpURL: string;
  postText: string;
  postImage: string;
}

export const PostCard = (props: postCardProps) => {
  return (
    <div className={styles.postCardContainer}>
      <PostInfo
        pfpURL={props.pfpURL}
        firstName={props.firstName}
        surname={props.surname}
      />
      <PostContent postText={props.postText} postImage={props.postImage} />
      <InteractWithPost />
    </div>
  );
};
