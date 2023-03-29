import styles from "../../../../styles/homePage/main/postCard/interactWithPost.module.css";
import haha from "../../../../assets/haha.png";
import love from "../../../../assets/love.png";
import like from "../../../../assets/like.png";
import utilityIcons from "../../../../assets/utility-icons-3.png";
export const InteractWithPost = () => {
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
        <div className={styles.interaction}>
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
      </div>
    </div>
  );
};
