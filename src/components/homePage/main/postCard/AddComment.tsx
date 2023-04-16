import { DefaultProfilePicture } from "../../../../utils/svgsFunction";
import utilityIcons from "../../../../assets/utility-icons-3.png";
import styles from "../../../../styles/homePage/main/postCard/commentSection.module.css";

interface Props {
  pfpURL: string | null;
}

const iconsPositions = [
  "-466px",
  "-574px",
  "-502px",
  "-610px",
  "-718px",
  "-664px",
];

export const AddComment = (props: Props) => {
  const { pfpURL } = props;
  return (
    <div>
      <DefaultProfilePicture userImage={pfpURL} />
      <div>
        <textarea style={{ resize: "none" }} cols={30} rows={10}></textarea>
        <div className={styles.icons_container}>
          {iconsPositions.map((icon, index) => (
            <div key={index}>
              <i
                style={{
                  backgroundImage: `url(${utilityIcons})`,
                  backgroundPosition: `0px ${icon}`,
                  backgroundSize: "26px 856px",
                  width: "16px",
                  height: "16px",
                  backgroundRepeat: "no-repeat",
                  display: "inline-block",
                  WebkitFilter:
                    "invert(62%) sepia(98%) saturate(12%) hue-rotate(175deg) brightness(90%) contrast(96%)",
                }}
              ></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
