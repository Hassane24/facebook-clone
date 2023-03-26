import { DefaultProfilePicture, Options } from "../../../../utils/svgsFunction";
import Public from "../../../../assets/public.png";
import utilityIcons from "../../../../assets/utility-icons.png";
export const PostInfo = () => {
  return (
    <div>
      <div>
        <DefaultProfilePicture />
      </div>
      <div>
        <span>firstName surname</span>
        <div>
          <span>date</span>
          <span>.</span>
          <span>
            <img src={Public} alt="" />
          </span>
        </div>
        <div>
          <div>
            <i
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
          <div>
            <Options />
          </div>
        </div>
      </div>
    </div>
  );
};
