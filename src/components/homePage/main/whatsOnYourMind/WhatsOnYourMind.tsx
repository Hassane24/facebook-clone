import Live from "../../../../assets/live-video.png";
import Photos from "../../../../assets/images.png";
import Feeling from "../../../../assets/feeling.png";
import { DefaultProfilePicture } from "../../../../utils/svgsFunction";
import styles from "../../../../styles/homePage/main/whatsOnYourMind/whatsOnYourMind.module.css";
import { fetchUserImage } from "../../../../utils/fetchUserImage";
import { fetchUserName } from "../../../../utils/fetchUserName";
import { useEffect, useState, forwardRef } from "react";
import { CreatePost } from "./CreatePost";

interface Props {
  inputFileHandler: (e?: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  image: File | null;
}

export const WhatsOnYourMind = forwardRef<HTMLTextAreaElement, Props>(
  ({ inputFileHandler, image }, ref) => {
    const [profileImageURL, setProfileImageURL] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [surname, setSurname] = useState<string>("");
    const [showCreatePost, setShowCreatePost] = useState(false);
    const [showPictureAddingArea, setShowPictureAddingArea] = useState(false);
    const [whatsOnYourMindValue, setWhatsOnYourMindValue] = useState("");

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
          <div
            className={
              whatsOnYourMindValue
                ? styles.coloredYourMindText
                : styles.onYourMindText
            }
            onClick={popUpCreatePost}
          >
            <span>
              {whatsOnYourMindValue ||
                "What's on your mind, " + firstName + "?"}
            </span>
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
          ref={ref}
          image={image}
          inputFileHandler={inputFileHandler}
          popUp={showCreatePost}
          closeCreatePost={popUpCreatePost}
          firstName={firstName}
          userProfilePicture={profileImageURL}
          surname={surname}
          popUpPictureAddingArea={showPictureAddingArea}
          openPictureAddingArea={popUpPictureAddingArea}
          closePictureAddingArea={closePictureAddingArea}
          setWhatsOnYourMindValue={setWhatsOnYourMindValue}
        />
      </div>
    );
  }
);
