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
  postName: string;
}

export const InteractWithPost = (props: Props) => {
  const [showInteractPopUp, setShowInteractPopUp] = useState(false);

  const postNameRef = useRef<string>();

  useEffect(() => {
    postNameRef.current = props.postName;
  }, [props.postName]);

  const revealInteractPopUp = () => setShowInteractPopUp(true);
  const hideInteractPopUp = () => setShowInteractPopUp(false);
  return (
    <div className={styles.interactionsContainer}>
      <div className={styles.firstContainer}>
        <div className={styles.interactions}>
          <div>
            <div>
              <img src={like} alt="" height={"18px"} width="18px" />
            </div>
            <div>
              <img src={love} alt="" height={"18px"} width="18px" />
            </div>
            <div>
              <img src={haha} alt="" height={"18px"} width="18px" />
            </div>
          </div>
          <div className={styles.numberOfInteractions}>1.3k</div>
        </div>
        <div className={styles.commentsAndShares}>
          <div>12 comments</div>
          <div>12 shares</div>
        </div>
      </div>
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
                  id={props.postName}
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
                  id={props.postName}
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
                  id={props.postName}
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
                  id={props.postName}
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
                  id={props.postName}
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
                  id={props.postName}
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
                  id={props.postName}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
