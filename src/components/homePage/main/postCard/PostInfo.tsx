import { DefaultProfilePicture, Options } from "../../../../utils/svgsFunction";
import Public from "../../../../assets/public.png";
import utilityIcons from "../../../../assets/utility-icons.png";
import styles from "../../../../styles/homePage/main/postCard/postInfo.module.css";
export const PostInfo = (props: {
  firstName: string;
  surname: string;
  pfpURL: string;
}) => {
  return (
    <div className={styles.postInfoContainer}>
      <div>
        <div className={styles.imageHolder}>
          <DefaultProfilePicture userImage={props.pfpURL} />
          <div className={styles.imageOverlay}></div>
        </div>
        <div>
          <span className={styles.username}>
            {props.firstName} {props.surname}
          </span>
          <div className={styles.date}>
            <div>date</div>
            <div>.</div>
            <div>
              <img
                src={Public}
                alt=""
                width={"12px"}
                height="12px"
                className={styles.icons}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.options}>
          <Options />
        </div>
        <div className={styles.options}>
          <i
            className={styles.icons}
            style={{
              backgroundImage: `url(${utilityIcons})`,
              backgroundPosition: "-66px -110px",
              backgroundSize: "190px 204px",
              width: "20px",
              height: "20px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};
