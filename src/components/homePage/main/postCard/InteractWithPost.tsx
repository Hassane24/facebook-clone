import styles from "../../../../styles/homePage/main/postCard/interactWithPost.module.css";
import haha from "../../../../assets/haha.png";
import love from "../../../../assets/love.png";
import like from "../../../../assets/like.png";
import sad from "../../../../assets/sad.png";
import wow from "../../../../assets/wow.png";
import care from "../../../../assets/care.png";
import angry from "../../../../assets/angry.png";
import utilityIcons from "../../../../assets/utility-icons-3.png";
import { useState, useEffect, useRef } from "react";

interface Props {
  interactionHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
  postName: number;
  numberOfInteractions: number;
  reactions: reactionObject[];
}

export interface reactionObject {
  key: string;
  number: number;
}

interface reactionNamesStates {
  reaction: string;
  itsState: boolean;
}

const stateOfReactionNames: reactionNamesStates[] = [
  { reaction: "like", itsState: false },
  { reaction: "love", itsState: false },
  { reaction: "care", itsState: false },
  { reaction: "haha", itsState: false },
  { reaction: "sad", itsState: false },
  { reaction: "wow", itsState: false },
  { reaction: "angry", itsState: false },
];

export const InteractWithPost = (props: Props) => {
  const [showInteractPopUp, setShowInteractPopUp] = useState(false);
  const [showNameOfInteraction, setShowNameOfInteraction] =
    useState<reactionNamesStates[]>(stateOfReactionNames);
  const [reactions, setReactions] = useState<reactionObject[]>(props.reactions);

  const postNameRef = useRef<string>();

  useEffect(() => {
    if (props.postName !== undefined) {
      postNameRef.current = props.postName.toString();
    }
  }, [props.postName]);

  useEffect(() => {
    getTopThreeReactions();
  }, []);

  const getTopThreeReactions = () => {
    const topThreeReactions = props.reactions
      .sort((a, b) => b.number - a.number)
      .slice(0, 3);
    setReactions(topThreeReactions);
  };

  const revealInteractPopUp = () => setShowInteractPopUp(true);
  const hideInteractPopUp = () => setShowInteractPopUp(false);

  const revealInteractionName = (e: React.MouseEvent<HTMLDivElement>) => {
    const nameOfHoveredReaction = (e.target as HTMLDivElement).getAttribute(
      "alt"
    );
    setShowNameOfInteraction((prevState) => {
      const newSate = [...prevState];
      const hoveredReaction = newSate.find(
        (reaction) => reaction.reaction === nameOfHoveredReaction
      );
      if (hoveredReaction) hoveredReaction.itsState = true;
      return newSate;
    });
  };

  const hideInteractionName = (e: React.MouseEvent<HTMLDivElement>) => {
    const nameOfHoveredReaction = (e.target as HTMLDivElement).getAttribute(
      "alt"
    );
    setShowNameOfInteraction((prevState) => {
      const newSate = [...prevState];
      const hoveredReaction = newSate.find(
        (reaction) => reaction.reaction === nameOfHoveredReaction
      );
      if (hoveredReaction) hoveredReaction.itsState = false;
      return newSate;
    });
  };

  return (
    <div className={styles.interactionsContainer}>
      {props.numberOfInteractions ? (
        <div className={styles.firstContainer}>
          <div className={styles.interactions}>
            <div>
              {reactions.map((reaction, index) =>
                reaction.number !== 0 ? (
                  <div key={index}>
                    <img
                      src={require(`../../../../assets/${reaction.key}.png`)}
                      alt={reaction.key}
                      height={"18px"}
                      width={"18px"}
                    />
                  </div>
                ) : null
              )}
            </div>
            <div className={styles.numberOfInteractions}>
              {props.numberOfInteractions}
            </div>
          </div>
          <div className={styles.commentsAndShares}>
            <div>12 comments</div>
            <div>12 shares</div>
          </div>
        </div>
      ) : null}
      <div className={styles.secondContainer}>
        <div
          className={styles.interaction}
          onMouseEnter={revealInteractPopUp}
          onMouseLeave={hideInteractPopUp}
        >
          <div>
            <i
              className={styles.icons}
              style={{
                backgroundImage: `url(${utilityIcons})`,
                backgroundPosition: "0px -339px",
                backgroundSize: "26px 866px",
                width: "18px",
                height: "18px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
          </div>
          Like
        </div>
        <div className={styles.interaction}>
          <div>
            <i
              className={styles.icons}
              style={{
                backgroundImage: `url(${utilityIcons})`,
                backgroundPosition: "0px -299px",
                backgroundSize: "26px 866px",
                width: "18px",
                height: "18px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
          </div>
          Comment
        </div>
        <div className={styles.interaction}>
          <div>
            <i
              className={styles.icons}
              style={{
                backgroundImage: `url(${utilityIcons})`,
                backgroundPosition: "0px -688px",
                backgroundSize: "26px 866px",
                width: "18px",
                height: "18px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
              }}
            ></i>
          </div>
          Share
        </div>
        <div className={showInteractPopUp ? styles.active : undefined}>
          {showInteractPopUp && (
            <div
              onClick={getTopThreeReactions}
              onMouseEnter={revealInteractPopUp}
              onMouseLeave={hideInteractPopUp}
              className={`${styles.interactPopUp} ${
                showInteractPopUp ? styles.active : undefined
              }`}
            >
              <div
                onMouseEnter={revealInteractionName}
                onMouseLeave={hideInteractionName}
                onClick={(e) => {
                  props.interactionHandler(e);
                  hideInteractPopUp();
                  hideInteractionName(e);
                }}
              >
                <img
                  src={like}
                  alt="like"
                  height={"40px"}
                  width={"40px"}
                  id={postNameRef.current}
                />
                <div
                  className={
                    showNameOfInteraction.find(
                      (reaction) => reaction.reaction === "like"
                    )?.itsState
                      ? styles.active
                      : undefined
                  }
                >
                  Like
                </div>
              </div>
              <div
                onMouseEnter={revealInteractionName}
                onMouseLeave={hideInteractionName}
                onClick={(e) => {
                  props.interactionHandler(e);
                  hideInteractPopUp();
                  hideInteractionName(e);
                }}
              >
                <img
                  src={love}
                  alt="love"
                  height={"40px"}
                  width={"40px"}
                  id={postNameRef.current}
                />
                <div
                  className={
                    showNameOfInteraction.find(
                      (reaction) => reaction.reaction === "love"
                    )?.itsState
                      ? styles.active
                      : undefined
                  }
                >
                  Love
                </div>
              </div>
              <div
                onMouseEnter={revealInteractionName}
                onMouseLeave={hideInteractionName}
                onClick={(e) => {
                  props.interactionHandler(e);
                  hideInteractPopUp();
                  hideInteractionName(e);
                }}
              >
                <img
                  src={care}
                  alt="care"
                  height={"40px"}
                  width={"40px"}
                  id={postNameRef.current}
                />
                <div
                  className={
                    showNameOfInteraction.find(
                      (reaction) => reaction.reaction === "care"
                    )?.itsState
                      ? styles.active
                      : undefined
                  }
                >
                  Care
                </div>
              </div>
              <div
                onMouseEnter={revealInteractionName}
                onMouseLeave={hideInteractionName}
                onClick={(e) => {
                  props.interactionHandler(e);
                  hideInteractPopUp();
                  hideInteractionName(e);
                }}
              >
                <img
                  src={haha}
                  alt="haha"
                  height={"40px"}
                  width={"40px"}
                  id={postNameRef.current}
                />
                <div
                  className={
                    showNameOfInteraction.find(
                      (reaction) => reaction.reaction === "haha"
                    )?.itsState
                      ? styles.active
                      : undefined
                  }
                >
                  Haha
                </div>
              </div>
              <div
                onMouseEnter={revealInteractionName}
                onMouseLeave={hideInteractionName}
                onClick={(e) => {
                  props.interactionHandler(e);
                  hideInteractPopUp();
                  hideInteractionName(e);
                }}
              >
                <img
                  src={wow}
                  alt="wow"
                  height={"40px"}
                  width={"40px"}
                  id={postNameRef.current}
                />
                <div
                  className={
                    showNameOfInteraction.find(
                      (reaction) => reaction.reaction === "wow"
                    )?.itsState
                      ? styles.active
                      : undefined
                  }
                >
                  Wow
                </div>
              </div>
              <div
                onMouseEnter={revealInteractionName}
                onMouseLeave={hideInteractionName}
                onClick={(e) => {
                  props.interactionHandler(e);
                  hideInteractPopUp();
                  hideInteractionName(e);
                }}
              >
                <img
                  src={sad}
                  alt="sad"
                  height={"40px"}
                  width={"40px"}
                  id={postNameRef.current}
                />
                <div
                  className={
                    showNameOfInteraction.find(
                      (reaction) => reaction.reaction === "sad"
                    )?.itsState
                      ? styles.active
                      : undefined
                  }
                >
                  Sad
                </div>
              </div>
              <div
                onMouseEnter={revealInteractionName}
                onMouseLeave={hideInteractionName}
                onClick={(e) => {
                  props.interactionHandler(e);
                  hideInteractPopUp();
                  hideInteractionName(e);
                }}
              >
                <img
                  src={angry}
                  alt="angry"
                  height={"40px"}
                  width={"40px"}
                  id={postNameRef.current}
                />
                <div
                  className={
                    showNameOfInteraction.find(
                      (reaction) => reaction.reaction === "angry"
                    )?.itsState
                      ? styles.active
                      : undefined
                  }
                >
                  Angry
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
