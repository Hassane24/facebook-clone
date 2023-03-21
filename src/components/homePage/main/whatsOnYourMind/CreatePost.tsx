import utilityIcons from "../../../../assets/utility-icons.png";
import secondUtilityIcons from "../../../../assets/utility-icons-2.png";
import images from "../../../../assets/images.png";
import tagPeople from "../../../../assets/tag-people.png";
import checkIn from "../../../../assets/check-in.png";
import lifeEvent from "../../../../assets/life-event.png";
import feeling from "../../../../assets/feeling.png";

import {
  DefaultProfilePicture,
  Phone,
  SmileyFace,
  Options,
} from "../../../../utils/svgsFunction";

export const CreatePost = () => {
  return (
    <form>
      <div>
        <div>
          <div>
            <div>Create post</div>
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
          </div>
        </div>

        <div>
          <div>
            <DefaultProfilePicture />
            <div></div>
          </div>
          <div>
            <span>Hassane Ben</span>
            <div>
              <div>
                <img src="" alt="" height="12px" width="12px" />
              </div>
              <span>Public</span>
              <i
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

      <div>
        <div>
          <input type="text" placeholder={"What's on your mind, Hassane"} />
          <div>
            <SmileyFace />
          </div>
        </div>

        <div>
          <input type="file" name="" id=" " />
          <div>
            <div>
              <div>
                <i
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
            </div>
            <div>Add photos/videos</div>
            <div>or drag and drop</div>
          </div>
        </div>

        <div>
          <div>
            <Phone />
          </div>
          <div>Add photos and videos from your mobile device.</div>
          <div>Add</div>
        </div>
      </div>
      <div>
        <div>
          <div>Add to your post</div>
          <div>
            <div>
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
  );
};
