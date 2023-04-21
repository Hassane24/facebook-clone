import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useState } from "react";

dayjs.extend(relativeTime);

interface Props {
  dateOfCreation: string;
  className?: string;
  isForComments: boolean;
}

export const DateOfCreation = (props: Props) => {
  const [postCreationDateString, setPostCreationDateString] =
    useState<string>();
  const [showFullDate, setShowFullDate] = useState(false);
  const postCreationDate = dayjs(props.dateOfCreation);

  useEffect(() => {
    let sixDaysSinceCreation = postCreationDate.fromNow(true);
    const dateFormattedForLessThanAYear = postCreationDate.format(
      "D MMMM [at] HH[:]mm"
    );

    const dateFormattedForMoreThanAYear =
      postCreationDate.format("D MMMM YYYY");
    const lessThanAYear = dayjs().diff(postCreationDate, "years");
    const moreThanSevenDays = dayjs().diff(postCreationDate, "days");
    if (!props.isForComments) {
      if (moreThanSevenDays >= 7 && lessThanAYear <= 0)
        return setPostCreationDateString(dateFormattedForLessThanAYear);

      if (lessThanAYear >= 1)
        return setPostCreationDateString(dateFormattedForMoreThanAYear);
    }

    if (sixDaysSinceCreation.split(" ").includes("an"))
      sixDaysSinceCreation = "1 h";
    if (
      sixDaysSinceCreation.split(" ").includes("hours") &&
      !sixDaysSinceCreation.split(" ").includes("an")
    )
      sixDaysSinceCreation = sixDaysSinceCreation.split(" ")[0] + " h";

    if (
      sixDaysSinceCreation.split(" ").includes("day") &&
      sixDaysSinceCreation.split(" ").includes("a")
    )
      sixDaysSinceCreation = "1 d";

    if (
      sixDaysSinceCreation.split(" ").includes("days") &&
      !sixDaysSinceCreation.split(" ").includes("a")
    )
      sixDaysSinceCreation = sixDaysSinceCreation.split(" ")[0] + " d";

    if (props.isForComments) {
      if (sixDaysSinceCreation.split(" ").includes("month"))
        sixDaysSinceCreation = "1 m";
      if (sixDaysSinceCreation.split(" ").includes("months"))
        sixDaysSinceCreation = sixDaysSinceCreation.split(" ")[0] + " m";
      if (sixDaysSinceCreation.split(" ").includes("year"))
        sixDaysSinceCreation = "1 y";
      if (sixDaysSinceCreation.split(" ").includes("years"))
        sixDaysSinceCreation = sixDaysSinceCreation.split(" ")[0] + " y";
    }

    setPostCreationDateString(sixDaysSinceCreation);
  }, [postCreationDate, props.isForComments]);

  const popUpFullDate = () => setShowFullDate(true);
  const hideFullDate = () => setShowFullDate(false);
  return (
    <>
      <div onMouseEnter={popUpFullDate} onMouseLeave={hideFullDate}>
        {postCreationDateString}
      </div>
      <div className={showFullDate ? props.className : undefined}>
        {postCreationDate.format("dddd[,] D MMMM YYYY [at] HH[:]mm")}
      </div>
    </>
  );
};
