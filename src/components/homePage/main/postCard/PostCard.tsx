import { InteractWithPost } from "./InteractWithPost";
import { PostContent } from "./PostContent";
import { PostInfo } from "./PostInfo";
import styles from "../../../../styles/homePage/main/postCard/postCard.module.css";

interface postCardProps {
  firstName: string | null;
  surname: string | null;
  pfpURL: string | null;
  postText: string | undefined;
  postName: number;
  postImage: string;
  numberOfInteractions: number;
  interactionHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
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
      <InteractWithPost
        postName={props.postName}
        numberOfInteractions={props.numberOfInteractions}
        interactionHandler={props.interactionHandler}
      />
    </div>
  );
};
