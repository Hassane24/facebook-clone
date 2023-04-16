import styles from "../../../../styles/homePage/main/postCard/interactWithPost.module.css";
import utilityIcons from "../../../../assets/utility-icons-3.png";
import { useState, useEffect, useRef } from "react";
import { db } from "../../../../firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { InteractionIcon } from "./InteractionIcon";
import { InteractionPopUpIcon } from "./InteractionPopUpIcon";

export interface InteractionWithPostProps {
  interactionHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
  removeReaction: (e: React.MouseEvent<HTMLDivElement>) => void;
  showCommentSection?: () => void;
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

interface userChosenReaction {
  nameOfReaction: string;
  reactionIcon: string;
  stylingOfReaction: string;
  likeButtonStyling?: string;
  webKitFilter?: string;
}

export interface reactors {
  firstName: string;
  surname: string;
  reactionName: string;
}

const stateOfReactionNames: string[] = [
  "like",
  "love",
  "care",
  "haha",
  "sad",
  "wow",
  "angry",
];

export const InteractWithPost = (props: InteractionWithPostProps) => {
  const [showInteractPopUp, setShowInteractPopUp] = useState(false);
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
            const interactionName = reactions.find((reaction) =>
              reaction.reactors.includes(reactor)
            )?.key as string;
            const reactorObject: reactors = {
              firstName: firstName,
              surname: surname,
              reactionName: interactionName,
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
                    <InteractionIcon
                      reactors={reactors}
                      imageName={reaction.key}
                      className={styles.shown}
                    ></InteractionIcon>
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
            <div onClick={props.showCommentSection}>12 comments</div>
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

        <div className={styles.interaction} onClick={props.showCommentSection}>
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
              {stateOfReactionNames.map((reaction, index) => (
                <div key={index}>
                  <InteractionPopUpIcon
                    className={styles.active}
                    reactionName={reaction}
                    id={postNameRef.current as string}
                    onClickHandler={(e) => {
                      props.interactionHandler(e);
                      hideInteractPopUp();
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
