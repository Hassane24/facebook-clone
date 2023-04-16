import { DefaultProfilePicture, Options } from "../../../../utils/svgsFunction";
import Public from "../../../../assets/public.png";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utilityIcons from "../../../../assets/utility-icons.png";
import styles from "../../../../styles/homePage/main/postCard/postInfo.module.css";
import { useEffect, useState } from "react";

export interface PostInfoProps {
  firstName: string | null;
  surname: string | null;
  pfpURL: string | null;
  dateOfCreation: string;
}
dayjs.extend(relativeTime);

export const PostInfo = (props: PostInfoProps) => {
  const [postCreationDateString, setPostCreationDateString] =
    useState<string>();
  const [showFullDate, setShowFullDate] = useState(false);
  const postCreationDate = dayjs(props.dateOfCreation);

  useEffect(() => {
    const sixDaysSinceCreation = postCreationDate.fromNow(true);
    const dateFormattedForLessThanAYear = postCreationDate.format(
      "D MMMM [at] HH[:]mm"
    );

    const dateFormattedForMoreThanAYear =
      postCreationDate.format("D MMMM YYYY");
    const lessThanAYear = dayjs().diff(postCreationDate, "years");
    const moreThanSevenDays = dayjs().diff(postCreationDate, "days");
    if (moreThanSevenDays >= 7 && lessThanAYear <= 0)
      return setPostCreationDateString(dateFormattedForLessThanAYear);

    if (lessThanAYear >= 1)
      return setPostCreationDateString(dateFormattedForMoreThanAYear);

    setPostCreationDateString(sixDaysSinceCreation);
  }, [postCreationDate]);

  const popUpFullDate = () => setShowFullDate(true);
  const hideFullDate = () => setShowFullDate(false);

  return (
    <div className={styles.postInfoContainer}>
      <div>
        <div className={styles.imageHolder}>
          <DefaultProfilePicture userImage={props.pfpURL} />
          <div className={styles.imageOverlay}></div>
        </div>
        <div>
          <span className={styles.username}>
            {props.firstName} {props.surname}
          </span>
          <div className={styles.date}>
            <div onMouseEnter={popUpFullDate} onMouseLeave={hideFullDate}>
              {postCreationDateString}
            </div>
            <div>.</div>
            <div>
              <img
                src={Public}
                alt=""
                width={"12px"}
                height="12px"
                className={styles.icons}
              />
            </div>
            <div className={showFullDate ? styles.active : undefined}>
              {postCreationDate.format("dddd[,] D MMMM YYYY [at] HH[:]mm")}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.options}>
          <Options />
        </div>
        <div className={styles.options}>
          <i
            className={styles.icons}
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
  );
};
