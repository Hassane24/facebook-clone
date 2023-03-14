import { DefaultProfilePicture } from "../../../utils/svgsFunction";
import styles from "../../../styles/homePage/friendsList/friend.module.css";
interface FriendProps {
  friendImageLink: string | undefined;
  friendFirstName: string;
  friendLastName: string;
}
export const Friend = ({
  friendImageLink,
  friendFirstName,
  friendLastName,
}: FriendProps) => {
  return (
    <div className={styles.friend}>
      <div className={styles.imageContainer}>
        <DefaultProfilePicture userImage={friendImageLink} />
      </div>
      <span>
        {friendFirstName} {friendLastName}
      </span>
    </div>
  );
};
