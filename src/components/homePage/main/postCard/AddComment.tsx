import { DefaultProfilePicture } from "../../../../utils/svgsFunction";
import utilityIcons from "../../../../assets/utility-icons-3.png";
import styles from "../../../../styles/homePage/main/postCard/commentSection.module.css";
import { useState, useRef } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

interface Props {
  pfpURL: string | null;
}

const iconsPositions = ["-413px", "-539px", "-449px", "-592px", "-718px"];

export const AddComment = (props: Props) => {
  const [comment, setComment] = useState("Write a comment...");
  const addCommentRef = useRef<HTMLDivElement>(null);
  const { pfpURL } = props;

  const onInput = (e: ContentEditableEvent) => setComment(e.target.value);

  const onClickHandler = () =>
    comment === "Write a comment..." ? setComment("") : null;

  return (
    <div className={styles.add_comment_container}>
      <div>
        <DefaultProfilePicture userImage={pfpURL} />
        <div className={styles.pfp_overlay}></div>
      </div>
      <div className={styles.write_comment}>
        <ContentEditable
          disabled={false}
          innerRef={addCommentRef}
          onChange={onInput}
          html={comment}
          onFocus={onClickHandler}
        />
        <div className={styles.icons_container}>
          {iconsPositions.map((icon, index) => (
            <div key={index}>
              <i
                onClick={() => console.log(comment)}
                style={{
                  backgroundImage: `url(${utilityIcons})`,
                  backgroundPosition: `0px ${icon}`,
                  backgroundSize: "26px 856px",
                  width: "16px",
                  height: "16px",
                  backgroundRepeat: "no-repeat",
                  display: "inline-block",
                  WebkitFilter:
                    "invert(62%) sepia(98%) saturate(12%) hue-rotate(175deg) brightness(90%) contrast(96%)",
                }}
              ></i>
            </div>
          ))}

          <div
            className={
              comment && comment !== "Write a comment..."
                ? styles.add_comment_button
                : undefined
            }
          >
            <i
              style={{
                backgroundImage: `url(${utilityIcons})`,
                backgroundPosition: `0px -664px`,
                backgroundSize: "26px 856px",
                width: "16px",
                height: "16px",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
                WebkitFilter:
                  "invert(62%) sepia(98%) saturate(12%) hue-rotate(175deg) brightness(90%) contrast(96%)",
              }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};
