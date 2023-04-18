import utilityIcons from "../../../../assets/utility-icons.png";
import styles from "../../../../styles/homePage/main/postCard/commentSection.module.css";

interface Props {
  firstName: string | null;
  surname: string | null;
  closeCommentSection: () => void;
}
export const HeaderForPost = (props: Props) => {
  return (
    <div className={styles.post_header}>
      <div>
        {props.firstName} {props.surname}'s post
      </div>
      <div>
        <i
          onClick={props.closeCommentSection}
          style={{
            backgroundImage: `url(${utilityIcons})`,
            backgroundPosition: "-66px -110px",
            backgroundSize: "190px 204px",
            width: "20px",
            height: "20px",
            backgroundRepeat: "no-repeat",
            display: "inline-block",
            WebkitFilter:
              "invert(62%) sepia(98%) saturate(12%) hue-rotate(175deg) brightness(90%) contrast(96%)",
          }}
        ></i>
      </div>
    </div>
  );
};
