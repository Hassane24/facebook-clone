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
import { db } from "../../../../firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

interface Props {
  interactionHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
  removeReaction: (e: React.MouseEvent<HTMLDivElement>) => void;
  postName: number;
  numberOfInteractions: number;
  reactions: reactionObject[];
  allOfReactors: string[];
}

export interface reactionObject {
  key: string;
  number: number;
  reactors: string[];
}

interface reactionNamesStates {
  reaction: string;
  itsState: boolean;
}

interface userChosenReaction {
  nameOfReaction: string;
  reactionIcon: string;
  stylingOfReaction: string;
  likeButtonStyling?: string;
  webKitFilter?: string;
}

interface reactors {
  firstName: string;
  surname: string;
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
  const [userChosenReaction, setUserChosenReaction] =
    useState<userChosenReaction>();
  const [didUserNotReactToPost, setDidUserNotReactToPost] = useState(false);
  const [reactions, setReactions] = useState<reactionObject[]>(props.reactions);
  const [showReactorsList, setShowReactorsList] = useState(false);
  const [reactors, setReactors] = useState<reactors[]>([]);

  const postNameRef = useRef<string>();

  useEffect(() => {
    const fetchUserNames = async () => {
      const reactorsNames: reactors[] = [];
      const reactors = props.allOfReactors;
      if (reactors && reactors.length) {
        for (const reactor of reactors) {
          const documentQuery = query(
            collection(db, "users"),
            where("userID", "==", reactor)
          );
          const document = await getDocs(documentQuery);
          document.forEach((doc) => {
            const firstName: string = doc.get("firstName");
            const surname: string = doc.get("surname");
            const reactorObject: reactors = {
              firstName: firstName,
              surname: surname,
            };
            reactorsNames.push(reactorObject);
          });
        }
      }
      setReactors(reactorsNames);
    };
    fetchUserNames();
  }, [props.allOfReactors, reactions]);

  useEffect(() => {
    if (props.postName !== undefined) {
      postNameRef.current = props.postName.toString();
    }
  }, [props.postName]);

  useEffect(() => {
    const userID = localStorage.getItem("UserID") as string;
    const threeReactions = props.reactions
      .sort((a, b) => b.number - a.number)
      .slice(0, 3);
    setReactions(threeReactions);

    const didUserNotReactToPost = props.reactions.every(
      (reaction) => !reaction.reactors.includes(userID)
    );
    setDidUserNotReactToPost(didUserNotReactToPost);

    const userChosenReaction = props.reactions.find((reaction) =>
      reaction.reactors.includes(userID)
    );
    if (userChosenReaction) {
      const reaction: userChosenReaction = {
        nameOfReaction:
          userChosenReaction?.key.charAt(0).toUpperCase() +
          userChosenReaction?.key.slice(1),
        reactionIcon: require(`../../../../assets/${userChosenReaction?.key}.png`),
        stylingOfReaction: "rgb(32, 120, 244)",
        likeButtonStyling: "-319px",
        webKitFilter:
          "invert(40%) sepia(52%) saturate(200%) saturate(200%) saturate(200%) saturate(189%) hue-rotate(191deg) brightness(103%) contrast(102%)",
      };
      if (userChosenReaction.key === "love")
        reaction.stylingOfReaction = "rgb(243, 62, 88)";
      if (
        userChosenReaction.key === "care" ||
        userChosenReaction.key === "haha" ||
        userChosenReaction.key === "sad" ||
        userChosenReaction.key === "wow"
      )
        reaction.stylingOfReaction = "rgb(247, 177, 37)";
      if (userChosenReaction.key === "angry")
        reaction.stylingOfReaction = "rgb(233, 113, 15)";

      setUserChosenReaction(reaction);
    } else setUserChosenReaction(undefined);
  }, [props.reactions]);

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

  const revealReactorsNames = () => setShowReactorsList(true);
  const hideReactorsNames = () => setShowReactorsList(false);

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
            <div
              onMouseEnter={revealReactorsNames}
              onMouseLeave={hideReactorsNames}
              className={styles.numberOfInteractions}
            >
              {props.numberOfInteractions}
            </div>
            {showReactorsList && (
              <div className={styles.shown}>
                {reactors.map((reactor, index) => (
                  <span key={index}>
                    {reactor.firstName} {reactor.surname}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className={styles.commentsAndShares}>
            <div>12 comments</div>
            <div>12 shares</div>
          </div>
        </div>
      ) : null}
      <div className={styles.secondContainer}>
        {didUserNotReactToPost && userChosenReaction === undefined ? (
          <div
            onClick={(e) => {
              props.removeReaction(e);
              hideInteractPopUp();
            }}
            className={styles.interaction}
            onMouseEnter={revealInteractPopUp}
            onMouseLeave={hideInteractPopUp}
            id={postNameRef.current}
          >
            <div>
              <i
                id={postNameRef.current}
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
        ) : (
          <div
            onClick={(e) => {
              props.removeReaction(e);
              hideInteractPopUp();
            }}
            className={styles.interaction}
            onMouseEnter={revealInteractPopUp}
            onMouseLeave={hideInteractPopUp}
            id={postNameRef.current}
            style={{ color: `${userChosenReaction?.stylingOfReaction}` }}
          >
            <div>
              {userChosenReaction?.nameOfReaction === "Like" ? (
                <i
                  id={postNameRef.current}
                  className={styles.icons}
                  style={{
                    backgroundImage: `url(${utilityIcons})`,
                    backgroundPosition: `0px ${userChosenReaction.likeButtonStyling}`,
                    backgroundSize: "26px 866px",
                    width: "18px",
                    height: "18px",
                    backgroundRepeat: "no-repeat",
                    display: "inline-block",
                    WebkitFilter: userChosenReaction.webKitFilter,
                  }}
                ></i>
              ) : (
                <img
                  id={postNameRef.current}
                  src={userChosenReaction?.reactionIcon}
                  alt=""
                  height={"18px"}
                  width={"18px"}
                />
              )}
            </div>
            {userChosenReaction?.nameOfReaction === "like"
              ? "Like"
              : userChosenReaction?.nameOfReaction}
          </div>
        )}

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
