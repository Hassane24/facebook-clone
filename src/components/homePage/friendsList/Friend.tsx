import { DefaultProfilePicture } from "../../../utils/svgsFunction";
interface FriendProps {
  friendImageLink?: string | undefined;
  friendFirstName: string;
  friendLastName: string;
}
export const Friend = ({
  friendImageLink,
  friendFirstName,
  friendLastName,
}: FriendProps) => {
  return (
    <div>
      <div>
        <DefaultProfilePicture userImage={friendImageLink} />
      </div>
      <span>
        {friendFirstName} {friendLastName}
      </span>
    </div>
  );
};
