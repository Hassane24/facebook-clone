import { DefaultProfilePicture } from "../../../../utils/svgsFunction";
import styles from "../../../../styles/homePage/main/postCard/commentSection.module.css";
import StylesForLikeButton from "../../../../styles/homePage/main/postCard/interactWithPost.module.css";
import { reactionNames } from "./InteractWithPost";
import { useState } from "react";
import { InteractionPopUpIcon } from "./InteractionPopUpIcon";

interface Props {
  firstName: string | null;
  surname: string | null;
  pfpURL: string | null;
  commentText?: string;
}

export const Comment = (props: Props) => {
  const [showInteractions, setShowInteraction] = useState(false);
  const { firstName, surname, pfpURL, commentText } = props;

  const revealInteractions = () => setShowInteraction(true);
  const hideInteractions = () => setShowInteraction(false);

  return (
    <div className={styles.comment}>
      <div>
        <DefaultProfilePicture userImage={pfpURL} />
        <div className={styles.pfp_overlay}></div>
      </div>
      <div>
        <div className={styles.comment_container}>
          <div>
            {firstName} {surname}
          </div>
          <div>{commentText}</div>
        </div>
        <div className={styles.comment_reaction}>
          <div
            onMouseEnter={revealInteractions}
            onMouseLeave={hideInteractions}
          >
            Like
          </div>
          <div>Reply</div>
          <div>4 h</div>
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
