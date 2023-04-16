import { Comment } from "../postCard/Comment";
import { HeaderForPost } from "../postCard/HeaderForPost";
import { AddComment } from "../postCard/AddComment";
import { postCardProps } from "./PostCard";
import { PostInfo } from "./PostInfo";
import { PostContent } from "./PostContent";
import { InteractWithPost } from "./InteractWithPost";
import styles from "../../../../styles/homePage/main/postCard/commentSection.module.css";

export const CommentSection = (props: postCardProps) => {
  return (
    <div className={styles.comment_section}>
      <HeaderForPost firstName={props.firstName} surname={props.surname} />
      <PostInfo
        pfpURL={props.pfpURL}
        firstName={props.firstName}
        dateOfCreation={props.dateOfCreation}
        surname={props.surname}
      />
      <PostContent postText={props.postText} postImage={props.postImage} />
      <InteractWithPost
        removeReaction={props.removeReaction}
        reactions={props.reactions}
        allOfReactors={props.allOfReactors}
        postName={props.postName}
        numberOfInteractions={props.numberOfInteractions}
        interactionHandler={props.interactionHandler}
      />
      <Comment
        firstName={props.firstName}
        surname={props.surname}
        pfpURL={props.pfpURL}
      />
      <AddComment pfpURL={props.pfpURL} />
    </div>
  );
};
