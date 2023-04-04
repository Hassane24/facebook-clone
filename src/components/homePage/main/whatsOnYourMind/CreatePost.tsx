import utilityIcons from "../../../../assets/utility-icons.png";
import secondUtilityIcons from "../../../../assets/utility-icons-2.png";
import images from "../../../../assets/images.png";
import tagPeople from "../../../../assets/tag-people.png";
import checkIn from "../../../../assets/check-in.png";
import lifeEvent from "../../../../assets/life-event.png";
import feeling from "../../../../assets/feeling.png";
import Public from "../../../../assets/public.png";
import Aa from "../../../../assets/Aa.png";
import styles from "../../../../styles/homePage/main/whatsOnYourMind/createPost.module.css";
import {
  DefaultProfilePicture,
  Phone,
  SmileyFace,
  Options,
} from "../../../../utils/svgsFunction";
import { useState, forwardRef } from "react";

interface CreatePostProps {
  popUpPictureAddingArea: boolean;
  popUp: boolean;
  firstName: string;
  surname: string;
  userProfilePicture: string;
  image: File | null;
  closeCreatePost: () => void;
  closePictureAddingArea: () => void;
  openPictureAddingArea: () => void;
  setWhatsOnYourMindValue: (value: string) => void;
  inputFileHandler: (e?: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}

export const CreatePost = forwardRef<HTMLTextAreaElement, CreatePostProps>(
  (props, ref) => {
    const [textAreaValue, setTextAreaValue] = useState("");
    const [imageUrl, setImageUrl] = useState<
      string | null | undefined | ArrayBuffer
    >("");

    const textAreaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
      setTextAreaValue(e.target.value);

    const displayImage = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        let reader = new FileReader();
        reader.onload = (event) => setImageUrl(event.target?.result);
        reader.readAsDataURL(e.target.files[0]);
      }
    };

    return (
      <div
        style={{ padding: props.popUpPictureAddingArea ? "" : "100px" }}
        className={`${styles.formContainer} ${
          props.popUp ? styles.active : undefined
        }`}
      >
        <form
          className={`${styles.form} ${
            props.popUp ? styles.active : undefined
          }`}
        >
          <div className={styles.firstContainer}>
            <div className={styles.createPost}>
              <div className={styles.createPostText}>Create post</div>
              <div
                className={styles.closeFormButton}
                onClick={() => {
                  props.setWhatsOnYourMindValue(textAreaValue);
                  props.closeCreatePost();
                }}
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

            <div className={styles.privacy}>
              <div>
                <DefaultProfilePicture userImage={props.userProfilePicture} />
                <div></div>
              </div>
              <div>
                <span>
                  {props.firstName} {props.surname}
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
            <div
              className={`${
                props.popUpPictureAddingArea ? styles.textArea : undefined
              } ${
                !props.popUpPictureAddingArea
                  ? styles.biggerTextArea
                  : undefined
              }`}
            >
              {!props.popUpPictureAddingArea && textAreaValue.length < 140 && (
                <div>
                  <img src={Aa} alt="" height={"38px"} width="38px" />
                </div>
              )}
              <textarea
                wrap="soft"
                placeholder={`What's on your mind, ${props.firstName}?`}
                value={textAreaValue}
                onChange={textAreaHandler}
                ref={ref}
              />
              <div
                className={
                  !props.popUpPictureAddingArea && textAreaValue.length >= 140
                    ? styles.smileyFace
                    : undefined
                }
              >
                <SmileyFace />
              </div>
            </div>

            {props.popUpPictureAddingArea && (
              <div className={`${styles.pictureAddingArea}`}>
                <div>
                  {!imageUrl && (
                    <>
                      <input
                        type="file"
                        name="image"
                        id="image"
                        title=""
                        accept="image/png, image/jpeg"
                        onChange={(e) => {
                          displayImage(e);
                          props.inputFileHandler(e);
                        }}
                      />
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
                    </>
                  )}
                  {imageUrl && (
                    <div className={styles.imageHolder}>
                      <img src={imageUrl as string} alt="" />
                    </div>
                  )}
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
                  onClick={() => {
                    props.closePictureAddingArea();
                    setImageUrl(null);
                  }}
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
                    backgroundColor: props.popUpPictureAddingArea
                      ? "black"
                      : "",
                  }}
                  onClick={props.openPictureAddingArea}
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
            <div
              className={
                props.image || textAreaValue !== "" ? styles.blueDiv : undefined
              }
            >
              <button
                className={
                  props.image || textAreaValue !== ""
                    ? styles.blueButton
                    : undefined
                }
                type="button"
              >
                Post
              </button>
              {/* REMINDER: the post picture method goes on this div */}
              {props.image || textAreaValue !== "" ? (
                <div
                  onClick={() => {
                    props.inputFileHandler();
                    setTextAreaValue("");
                    setImageUrl(null);
                    props.closeCreatePost();
                  }}
                ></div>
              ) : null}
            </div>
          </div>
        </form>
        <div
          onClick={() => {
            props.setWhatsOnYourMindValue(textAreaValue);
            props.closeCreatePost();
          }}
          className={`${styles.overlay} ${
            props.popUp ? styles.overlayActive : undefined
          }`}
        ></div>
      </div>
    );
  }
);
