import { InteractWithPost, reactionObject } from "./InteractWithPost";
import { PostContent } from "./PostContent";
import { PostInfo } from "./PostInfo";
import styles from "../../../../styles/homePage/main/postCard/postCard.module.css";
import { useEffect, useState } from "react";
import { CommentSection } from "./CommentSection";
import { CommentProps } from "./Comment";

export interface postCardProps {
  reactions: reactionObject[];
  firstName: string | null;
  dateOfCreation: string;
  surname: string | null;
  pfpURL: string | null;
  postText: string | undefined;
  postName: number;
  postImage: string;
  comments: CommentProps[];
  numberOfInteractions: number;
  allOfReactors: string[];
  interactionHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
  removeReaction: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const PostCard = (props: postCardProps) => {
  const [showCommentSection, setShowCommentSection] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;
    if (showCommentSection) body.style.overflow = "hidden";
    else body.style.overflow = "auto";
  }, [showCommentSection]);

  const revealCommentSection = () => setShowCommentSection(true);

  const hideCommentSection = () => setShowCommentSection(false);

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
            comments={props.comments}
            closeCommentSection={hideCommentSection}
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
          <div className={styles.overlay} onClick={hideCommentSection}></div>
        </div>
      )}
    </div>
  );
};
