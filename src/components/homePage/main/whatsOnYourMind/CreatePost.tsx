import utilityIcons from "../../../../assets/utility-icons.png";
import secondUtilityIcons from "../../../../assets/utility-icons-2.png";
import images from "../../../../assets/images.png";
import tagPeople from "../../../../assets/tag-people.png";
import checkIn from "../../../../assets/check-in.png";
import lifeEvent from "../../../../assets/life-event.png";
import feeling from "../../../../assets/feeling.png";
import Public from "../../../../assets/public.png";
import styles from "../../../../styles/homePage/main/whatsOnYourMind/createPost.module.css";
import {
  DefaultProfilePicture,
  Phone,
  SmileyFace,
  Options,
} from "../../../../utils/svgsFunction";

interface CreatePostProps {
  popUp: boolean;
  closeCreatePost: () => void;
  firstName: string;
  surname: string;
  userProfilePicture: string;
  popUpPictureAddingArea: boolean;
  closePictureAddingArea: () => void;
  openPictureAddingArea: () => void;
}

export const CreatePost = ({
  popUp,
  closeCreatePost,
  firstName,
  userProfilePicture,
  surname,
  popUpPictureAddingArea,
  closePictureAddingArea,
  openPictureAddingArea,
}: CreatePostProps) => {
  return (
    <div className={`${styles.formContainer} ${popUp && styles.active}`}>
      <form className={`${styles.form} ${popUp && styles.active}`}>
        <div className={styles.firstContainer}>
          <div className={styles.createPost}>
            <div className={styles.createPostText}>Create post</div>
            <div className={styles.closeFormButton} onClick={closeCreatePost}>
              <i
                className={styles.icon}
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
          </div>

          <div className={styles.privacy}>
            <div>
              <DefaultProfilePicture userImage={userProfilePicture} />
              <div></div>
            </div>
            <div>
              <span>
                {firstName} {surname}
              </span>
              <div className={styles.options}>
                <div>
                  <img
                    src={Public}
                    alt=""
                    height="12px"
                    width="12px"
                    className={styles.icon}
                  />
                </div>
                <span>Public</span>
                <i
                  className={styles.icon}
                  style={{
                    backgroundImage: `url(${utilityIcons})`,
                    backgroundPosition: "-166px -172px",
                    backgroundSize: "190px 204px",
                    width: "12px",
                    height: "12px",
                    display: "inline-block",
                    backgroundRepeat: "no-repeat",
                  }}
                ></i>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.secondContainer}>
          <div className={styles.textArea}>
            <textarea
              wrap="soft"
              placeholder={`What's on your mind, ${firstName}?`}
            />
            <div>
              <SmileyFace />
            </div>
          </div>

          {popUpPictureAddingArea && (
            <div className={`${styles.pictureAddingArea} `}>
              <div>
                <input type="file" name="" id=" " title="" />
                <div>
                  <i
                    className={styles.icon}
                    style={{
                      backgroundImage: `url(${secondUtilityIcons})`,
                      backgroundPosition: "0px -86px",
                      backgroundSize: "38px 162px",
                      width: "20px",
                      height: "20px",
                      backgroundRepeat: "no-repeat",
                      display: "inline-block",
                    }}
                  ></i>
                </div>
                <div>Add photos/videos</div>
                <div>or drag and drop</div>
              </div>
              <div className={styles.photosFromHome}>
                <div>
                  <Phone />
                </div>
                <div>Add photos and videos from your mobile device.</div>
                <div>Add</div>
              </div>
              <div
                className={styles.closeDragDrop}
                onClick={closePictureAddingArea}
              >
                <i
                  className={styles.icon}
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
            </div>
          )}
        </div>

        <div className={styles.thirdContainer}>
          <div>
            <div>Add to your post</div>
            <div>
              <div
                style={{
                  backgroundColor: popUpPictureAddingArea ? "black" : "",
                }}
                onClick={openPictureAddingArea}
              >
                <img src={images} alt="" height="24px" width="24px" />
              </div>
              <div>
                <img src={tagPeople} alt="" height="24px" width="24px" />
              </div>
              <div>
                <img src={feeling} alt="" height="24px" width="24px" />
              </div>
              <div>
                <img src={checkIn} alt="" height="24px" width="24px" />
              </div>
              <div>
                <img src={lifeEvent} alt="" height="24px" width="24px" />
              </div>
              <div>
                <Options />
              </div>
            </div>
          </div>
          <button type="button">Post</button>
        </div>
      </form>
      <div
        onClick={closeCreatePost}
        className={`${styles.overlay} ${popUp && styles.overlayActive}`}
      ></div>
    </div>
  );
};
