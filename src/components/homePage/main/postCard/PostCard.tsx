import { InteractWithPost, reactionObject } from "./InteractWithPost";
import { PostContent } from "./PostContent";
import { PostInfo } from "./PostInfo";
import styles from "../../../../styles/homePage/main/postCard/postCard.module.css";
import { useState } from "react";
import { CommentSection } from "./CommentSection";

export interface postCardProps {
  reactions: reactionObject[];
  firstName: string | null;
  dateOfCreation: string;
  surname: string | null;
  pfpURL: string | null;
  postText: string | undefined;
  postName: number;
  postImage: string;
  numberOfInteractions: number;
  allOfReactors: string[];
  interactionHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
  removeReaction: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const PostCard = (props: postCardProps) => {
  const [showCommentSection, setShowCommentSection] = useState(false);

  const revealCommentSection = () =>
    setShowCommentSection((prevState) => !prevState);

  return (
    <div className={styles.postCardContainer}>
      <PostInfo
        dateOfCreation={props.dateOfCreation}
        pfpURL={props.pfpURL}
        firstName={props.firstName}
        surname={props.surname}
      />
      <PostContent postText={props.postText} postImage={props.postImage} />
      <InteractWithPost
        showCommentSection={revealCommentSection}
        removeReaction={props.removeReaction}
        reactions={props.reactions}
        allOfReactors={props.allOfReactors}
        postName={props.postName}
        numberOfInteractions={props.numberOfInteractions}
        interactionHandler={props.interactionHandler}
      />

      {showCommentSection && (
        <div className={styles.comment_section_container}>
          <CommentSection
            dateOfCreation={props.dateOfCreation}
            pfpURL={props.pfpURL}
            firstName={props.firstName}
            surname={props.surname}
            postText={props.postText}
            postImage={props.postImage}
            removeReaction={props.removeReaction}
            reactions={props.reactions}
            allOfReactors={props.allOfReactors}
            postName={props.postName}
            numberOfInteractions={props.numberOfInteractions}
            interactionHandler={props.interactionHandler}
          />
          <div className={styles.overlay} onClick={revealCommentSection}></div>
        </div>
      )}
    </div>
  );
};
