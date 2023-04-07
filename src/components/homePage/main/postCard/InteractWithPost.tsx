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
import { doc, getDoc } from "firebase/firestore";

interface Props {
  interactionHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
  postName: number;
  numberOfInteractions: number;
}

export interface reactionObject {
  key: string;
  number: number;
}

export const InteractWithPost = (props: Props) => {
  const [showInteractPopUp, setShowInteractPopUp] = useState(false);
  const [reactions, setReactions] = useState<reactionObject[]>([]);

  const postNameRef = useRef<string>();

  useEffect(() => {
    if (props.postName !== undefined) {
      postNameRef.current = props.postName.toString();
      getReactions();
    }
  }, [props.postName]);

  const getReactions = async () => {
    const reactionsArray: reactionObject[] = [];
    if (postNameRef.current) {
      const documentRef = doc(db, "posts", postNameRef.current);
      await getDoc(documentRef).then((res) =>
        reactionsArray.push(...res.get("reactions"))
      );
      const reactionsToDisplay = reactionsArray
        .sort((a, b) => b.number - a.number)
        .slice(0, 3);

      setReactions(reactionsToDisplay);
    }
  };

  const revealInteractPopUp = () => setShowInteractPopUp(true);
  const hideInteractPopUp = () => setShowInteractPopUp(false);

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
        <div
          onClick={() => console.log(reactions)}
          className={styles.interaction}
        >
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
              onClick={getReactions}
              onMouseEnter={revealInteractPopUp}
              onMouseLeave={hideInteractPopUp}
              className={`${styles.interactPopUp} ${
                showInteractPopUp ? styles.active : undefined
              }`}
            >
              <div
                onClick={(e) => {
                  props.interactionHandler(e);
                  hideInteractPopUp();
                }}
              >
                <img
                  src={like}
                  alt="like"
                  height={"40px"}
                  width={"40px"}
                  id={postNameRef.current}
                />
              </div>
              <div
                onClick={(e) => {
                  props.interactionHandler(e);
                  hideInteractPopUp();
                }}
              >
                <img
                  src={love}
                  alt="love"
                  height={"40px"}
                  width={"40px"}
                  id={postNameRef.current}
                />
              </div>
              <div
                onClick={(e) => {
                  props.interactionHandler(e);
                  hideInteractPopUp();
                }}
              >
                <img
                  src={care}
                  alt="care"
                  height={"40px"}
                  width={"40px"}
                  id={postNameRef.current}
                />
              </div>
              <div
                onClick={(e) => {
                  props.interactionHandler(e);
                  hideInteractPopUp();
                }}
              >
                <img
                  src={haha}
                  alt="haha"
                  height={"40px"}
                  width={"40px"}
                  id={postNameRef.current}
                />
              </div>
              <div
                onClick={(e) => {
                  props.interactionHandler(e);
                  hideInteractPopUp();
                }}
              >
                <img
                  src={wow}
                  alt="wow"
                  height={"40px"}
                  width={"40px"}
                  id={postNameRef.current}
                />
              </div>
              <div
                onClick={(e) => {
                  props.interactionHandler(e);
                  hideInteractPopUp();
                }}
              >
                <img
                  src={sad}
                  alt="sad"
                  height={"40px"}
                  width={"40px"}
                  id={postNameRef.current}
                />
              </div>
              <div
                onClick={(e) => {
                  props.interactionHandler(e);
                  hideInteractPopUp();
                }}
              >
                <img
                  src={angry}
                  alt="angry"
                  height={"40px"}
                  width={"40px"}
                  id={postNameRef.current}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
