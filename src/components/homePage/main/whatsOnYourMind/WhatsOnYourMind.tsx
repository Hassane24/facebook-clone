import Live from "../../../../assets/live-video.png";
import Photos from "../../../../assets/images.png";
import Feeling from "../../../../assets/feeling.png";
import { DefaultProfilePicture } from "../../../../utils/svgsFunction";
import styles from "../../../../styles/homePage/main/whatsOnYourMind/whatsOnYourMind.module.css";
import { fetchUserImage } from "../../../../utils/fetchUserImage";
import { fetchUserName } from "../../../../utils/fetchUserName";
import { useEffect, useState } from "react";
import { CreatePost } from "./CreatePost";

export const WhatsOnYourMind = () => {
  const [profileImageURL, setProfileImageURL] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showPictureAddingArea, setShowPictureAddingArea] = useState(false);

  useEffect(() => {
    const userID = localStorage.getItem("UserID");
    const getUserName = async () => await fetchUserName(userID);
    getUserName().then((userName) => {
      setFirstName(userName[0].firstName);
      setSurname(userName[0].surname);
    });
    const getUserImage = async () => await fetchUserImage(userID);
    getUserImage().then((imageLink) => setProfileImageURL(imageLink));
  }, []);

  const popUpCreatePost = () => setShowCreatePost(!showCreatePost);
  const popUpPictureAddingArea = () => setShowPictureAddingArea(true);
  const closePictureAddingArea = () => setShowPictureAddingArea(false);

  return (
    <div className={styles.container}>
      <div className={styles.whatsOnYourMind}>
        <div className={styles.imageHolder}>
          <DefaultProfilePicture userImage={profileImageURL} />
          <div className={styles.overlayDiv}></div>
        </div>
        <div className={styles.onYourMindText} onClick={popUpCreatePost}>
          <span>What's on your mind, {firstName}?</span>
        </div>
      </div>
      <div className={styles.choices}>
        <div>
          <div>
            <img src={Live} alt="" width="24px" height="24px" />
          </div>
          <span>Live video</span>
        </div>
        <div
          onClick={() => {
            popUpCreatePost();
            popUpPictureAddingArea();
          }}
        >
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
      <CreatePost
        popUp={showCreatePost}
        closeCreatePost={popUpCreatePost}
        firstName={firstName}
        userProfilePicture={profileImageURL}
        surname={surname}
        popUpPictureAddingArea={showPictureAddingArea}
        openPictureAddingArea={popUpPictureAddingArea}
        closePictureAddingArea={closePictureAddingArea}
      />
    </div>
  );
};
