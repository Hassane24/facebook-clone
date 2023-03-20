import Live from "../../../../assets/live-video.png";
import Photos from "../../../../assets/images.png";
import Feeling from "../../../../assets/feeling.png";
import { DefaultProfilePicture } from "../../../../utils/svgsFunction";
import styles from "../../../../styles/homePage/main/whatsOnYourMind/whatsOnYourMind.module.css";
export const WhatsOnYourMind = () => {
  return (
    <div className={styles.container}>
      <div className={styles.whatsOnYourMind}>
        <div className={styles.imageHolder}>
          <DefaultProfilePicture />
          <div className={styles.overlayDiv}></div>
        </div>
        <div className={styles.onYourMindText}>
          <span>What's on your mind, Hassane?</span>
        </div>
      </div>
      <div className={styles.choices}>
        <div>
          <div>
            <img src={Live} alt="" width="24px" height="24px" />
          </div>
          <span>Live video</span>
        </div>
        <div>
          <div>
            <img src={Photos} alt="" width="24px" height="24px" />
          </div>
          <span>Photo/video</span>
        </div>
        <div>
          <div>
            <img src={Feeling} alt="" width="24px" height="24px" />
          </div>
          <span>Feeling/activity</span>
        </div>
      </div>
    </div>
  );
};
