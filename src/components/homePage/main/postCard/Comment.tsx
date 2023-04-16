import { DefaultProfilePicture } from "../../../../utils/svgsFunction";
import styles from "../../../../styles/homePage/main/postCard/commentSection.module.css";

interface Props {
  firstName: string | null;
  surname: string | null;
  pfpURL: string | null;
  commentText?: string;
}

export const Comment = (props: Props) => {
  const { firstName, surname, pfpURL, commentText } = props;
  return (
    <div className={styles.comment}>
      <DefaultProfilePicture userImage={pfpURL} />
      <div>
        {/* container for username and user comment  */}
        <div className={styles.comment_container}>
          <div>
            {firstName} {surname}
          </div>
          <div>{commentText}</div>
        </div>
        {/* container for reply like and time posted */}
        <div className={styles.comment_reaction}>
          <div>Like</div>
          <div>Reply</div>
          <div>4 h</div>
        </div>
      </div>
    </div>
  );
};
