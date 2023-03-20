import Live from "../../../../assets/live-video.png";
import Photos from "../../../../assets/images.png";
import Feeling from "../../../../assets/feeling.png";
import { DefaultProfilePicture } from "../../../../utils/svgsFunction";

export const WhatsOnYourMind = () => {
  return (
    <div>
      <div>
        <div>
          <DefaultProfilePicture />
        </div>
        <div>
          <span>What's on your mind, Hassane?</span>
        </div>
      </div>
      <div>
        <div>
          <div>
            <img src={Live} alt="" />
          </div>
          <span>Live video</span>
        </div>
        <div>
          <div>
            <img src={Photos} alt="" />
          </div>
          <span>Photo/video</span>
        </div>
        <div>
          <div>
            <img src={Feeling} alt="" />
          </div>
          <span>Feeling/activity</span>
        </div>
      </div>
    </div>
  );
};
