import { Comment, CommentProps } from "../postCard/Comment";
import { HeaderForPost } from "../postCard/HeaderForPost";
import { AddComment } from "../postCard/AddComment";
import { postCardProps } from "./PostCard";
import { PostInfo } from "./PostInfo";
import { PostContent } from "./PostContent";
import { InteractWithPost } from "./InteractWithPost";
import styles from "../../../../styles/homePage/main/postCard/commentSection.module.css";
import { useRef, useState } from "react";
import { db } from "../../../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

interface Props extends postCardProps {
  closeCommentSection: () => void;
  comments: CommentProps[];
}

export const CommentSection = (props: Props) => {
  const [comments, setComments] = useState<CommentProps[]>(props.comments);

  const commentRef = useRef<HTMLDivElement>(null);

  const addComment = () => {
    if (commentRef.current?.innerText) {
      const comment: CommentProps = {
        commentDate: new Date().toISOString(),
        commenterFirstName: props.firstName,
        commenterSurname: props.surname,
        commenterPfpURL: props.pfpURL,
        commentReactions: [
          { key: "like", number: 0, reactors: [] },
          { key: "love", number: 0, reactors: [] },
          { key: "care", number: 0, reactors: [] },
          { key: "haha", number: 0, reactors: [] },
          { key: "sad", number: 0, reactors: [] },
          { key: "wow", number: 0, reactors: [] },
          { key: "angry", number: 0, reactors: [] },
        ],
        commentText: commentRef.current?.innerText,
      };
      setComments([comment, ...comments]);
      setDoc(
        doc(db, "posts", props.postName.toString()),
        {
          comments: [...comments, comment],
        },
        {
          merge: true,
        }
      );
    }
  };

  return (
    <div className={styles.comment_section}>
      <HeaderForPost
        closeCommentSection={props.closeCommentSection}
        firstName={props.firstName}
        surname={props.surname}
      />
      <div className={styles.comments}>
        <PostInfo
          pfpURL={props.pfpURL}
          firstName={props.firstName}
          dateOfCreation={props.dateOfCreation}
          surname={props.surname}
        />
        <PostContent postText={props.postText} postImage={props.postImage} />
        <InteractWithPost
          comments={comments}
          removeReaction={props.removeReaction}
          reactions={props.reactions}
          allOfReactors={props.allOfReactors}
          postName={props.postName}
          numberOfInteractions={props.numberOfInteractions}
          interactionHandler={props.interactionHandler}
        />
        <div>
          {comments !== undefined &&
            comments.map((comment) => (
              <div key={uuidv4()}>
                <Comment
                  commentDate={comment.commentDate}
                  postName={props.postName}
                  commentReactions={comment.commentReactions}
                  commenterFirstName={comment.commenterFirstName}
                  commenterPfpURL={comment.commenterPfpURL}
                  commenterSurname={comment.commenterSurname}
                  commentText={comment.commentText}
                />
              </div>
            ))}
        </div>
      </div>
      <AddComment
        pfpURL={props.pfpURL}
        ref={commentRef}
        addComment={addComment}
      />
    </div>
  );
};
