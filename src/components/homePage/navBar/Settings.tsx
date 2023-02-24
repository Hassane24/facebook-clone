import {
  Menu,
  Messenger,
  Notifications,
  DefaultProfilePicture,
} from "../../../utils/svgsFunction";
const Settings = () => {
  return (
    <div>
      <div>
        <Menu />
      </div>
      <div>
        <Messenger />
      </div>
      <div>
        <Notifications />
      </div>
      <div>
        <DefaultProfilePicture />
      </div>
    </div>
  );
};

export default Settings;
