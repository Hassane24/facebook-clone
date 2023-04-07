import Live from "../../../../assets/live-video.png";
import Photos from "../../../../assets/images.png";
import Feeling from "../../../../assets/feeling.png";
import { DefaultProfilePicture } from "../../../../utils/svgsFunction";
import styles from "../../../../styles/homePage/main/whatsOnYourMind/whatsOnYourMind.module.css";
import { useEffect, useState, forwardRef } from "react";
import { CreatePost } from "./CreatePost";

interface Props {
  inputFileHandler: (e?: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  image: File | null;
}

export const WhatsOnYourMind = forwardRef<HTMLTextAreaElement, Props>(
  ({ inputFileHandler, image }, ref) => {
    const [profileImageURL, setProfileImageURL] = useState<string | undefined>(
      undefined
    );
    const [firstName, setFirstName] = useState<string>("");
    const [surname, setSurname] = useState<string>("");
    const [showCreatePost, setShowCreatePost] = useState(false);
    const [showPictureAddingArea, setShowPictureAddingArea] = useState(false);
    const [whatsOnYourMindValue, setWhatsOnYourMindValue] = useState("");

    useEffect(() => {
      const profilePictureURL = localStorage.getItem("profile-picture");
      const firstName = localStorage.getItem("first-name");
      const surname = localStorage.getItem("surname");
      profilePictureURL === null
        ? setProfileImageURL(undefined)
        : setProfileImageURL(profilePictureURL);

      setFirstName(firstName as string);
      setSurname(surname as string);
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
