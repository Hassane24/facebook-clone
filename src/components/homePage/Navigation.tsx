import { Friends, Groups, Home, Gaming } from "../../utils/svgsFunction";

export const Navigation = () => {
  return (
    <div>
      <div>
        <Home />
      </div>
      <div>
        <Friends />
      </div>
      <div>
        <Groups />
      </div>
      <div>
        <Gaming />
      </div>
    </div>
  );
};
