import { DefaultProfilePicture } from "../../../../utils/svgsFunction";
import styles from "../../../../styles/homePage/main/postCard/commentSection.module.css";
import StylesForLikeButton from "../../../../styles/homePage/main/postCard/interactWithPost.module.css";
import { reactionNames, reactionObject } from "./InteractWithPost";
import { useEffect, useState } from "react";
import { InteractionPopUpIcon } from "./InteractionPopUpIcon";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebase/firebase";
import { DateOfCreation } from "./DateOfCreation";

export interface CommentProps {
  commenterFirstName: string | null;
  commenterSurname: string | null;
  commenterPfpURL: string | null;
  postName?: number;
  commentText: string;
  commentDate: string;
  commentReactions: reactionObject[];
}

export const Comment = (props: CommentProps) => {
  const [showInteractions, setShowInteraction] = useState(false);
  const [commentInteractions, setCommentInteractions] = useState<
    reactionObject[]
  >(props.commentReactions);
  const [mostUsedReactions, setMostUsedReactions] =
    useState<reactionObject[]>();

  useEffect(() => {
    const topThreeReactions = commentInteractions
      .sort((a, b) => b.number - a.number)
      .slice(0, 3);
    setMostUsedReactions(topThreeReactions);
  }, [commentInteractions]);

  const {
    commenterFirstName,
    commenterSurname,
    commenterPfpURL,
    commentText,
    postName,
    commentDate,
  } = props;

  const revealInteractions = () => setShowInteraction(true);
  const hideInteractions = () => setShowInteraction(false);

  const updateDataBaseComments = async () => {
    const document = await getDoc(
      doc(db, "posts", postName?.toString() as string)
    );
    const comments: CommentProps[] = document.get("comments");
    const filteredComments = comments.filter(
      (comment) => comment.commentDate !== commentDate
    );
    return filteredComments;
  };

  const handleCommentInteraction = (reactionName: string) => {
    const userID = localStorage.getItem("UserID") as string;
    setCommentInteractions((prevState) => {
      const newState = [...prevState];
      const chosenReaction = newState.find(
        (reaction) => reaction.key === reactionName
      ) as reactionObject;
      const reactionThatUserHadBefore = newState.find((reaction) =>
        reaction.reactors.includes(userID)
      );
      if (reactionThatUserHadBefore) {
        reactionThatUserHadBefore.number--;
        reactionThatUserHadBefore.reactors =
          reactionThatUserHadBefore.reactors.filter(
            (reactors) => reactors !== userID
          );
        chosenReaction.number++;
        chosenReaction.reactors = chosenReaction.reactors.concat(userID);
      } else {
        chosenReaction.number++;
        chosenReaction.reactors = chosenReaction.reactors.concat(userID);
      }
      updateDataBaseComments().then((filteredComments) => {
        const commentToBePushedToDB: CommentProps = {
          commentDate: commentDate,
          commenterFirstName: commenterFirstName,
          commenterPfpURL: commenterPfpURL,
          commenterSurname: commenterSurname,
          commentText: commentText,
          commentReactions: [...newState],
        };
        updateDoc(doc(db, "posts", postName?.toString() as string), {
          comments: [...filteredComments.concat(commentToBePushedToDB)],
        });
      });
      return newState;
    });
  };

  const removeReactionOrLikeComment = () => {
    const userID = localStorage.getItem("UserID") as string;

    setCommentInteractions((prevState) => {
      const newState = [...prevState];
      const didUserNotReactToPost = newState.every(
        (reaction) => !reaction.reactors.includes(userID)
      );

      if (!didUserNotReactToPost) {
        const reactionThatUserHadBefore = newState.find((reaction) =>
          reaction.reactors.includes(userID)
        );
        if (reactionThatUserHadBefore) {
          reactionThatUserHadBefore.reactors =
            reactionThatUserHadBefore.reactors.filter(
              (reactor) => reactor !== userID
            );
          reactionThatUserHadBefore.number--;
        }
      }
      if (didUserNotReactToPost) {
        const likeReaction = newState.find(
          (reaction) => reaction.key === "like"
        );
        if (likeReaction) {
          likeReaction.number++;
          likeReaction.reactors = [...likeReaction.reactors, userID];
        }
      }
      updateDataBaseComments().then((filteredComments) => {
        const commentToBePushedToDB: CommentProps = {
          commentDate: commentDate,
          commenterFirstName: commenterFirstName,
          commenterPfpURL: commenterPfpURL,
          commenterSurname: commenterSurname,
          commentText: commentText,
          commentReactions: [...newState],
        };
        updateDoc(doc(db, "posts", postName?.toString() as string), {
          comments: [...filteredComments.concat(commentToBePushedToDB)],
        });
      });

      return newState;
    });
  };

  return (
    <div className={styles.comment} onClick={updateDataBaseComments}>
      <div>
        <DefaultProfilePicture userImage={commenterPfpURL} />
        <div className={styles.pfp_overlay}></div>
      </div>
      <div>
        <div className={styles.comment_container}>
          <div>
            {commenterFirstName} {commenterSurname}
          </div>
          <div>{commentText}</div>
        </div>
        <div className={styles.comment_reaction}>
          <div
            onMouseEnter={revealInteractions}
            onMouseLeave={hideInteractions}
            onClick={removeReactionOrLikeComment}
          >
            Like
          </div>
          <div>Reply</div>
          <DateOfCreation isForComments={true} dateOfCreation={commentDate} />
          <div
            className={`${styles.animation_div} ${
              showInteractions ? styles.active : undefined
            }`}
          >
            {showInteractions && (
              <div
                className={`${StylesForLikeButton.interactPopUp} ${
                  showInteractions ? StylesForLikeButton.active : undefined
                } ${styles.comment_interaction}`}
                onMouseEnter={revealInteractions}
                onMouseLeave={hideInteractions}
              >
                {reactionNames.map((reaction, index) => (
                  <div key={index}>
                    <InteractionPopUpIcon
                      reactionName={reaction}
                      className={StylesForLikeButton.active}
                      onClickHandler={() => {
                        hideInteractions();
                        handleCommentInteraction(reaction);
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
