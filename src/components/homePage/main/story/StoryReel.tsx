import { Reels, Stories } from "../../../../utils/svgsFunction";
export const StoryReel = () => {
  return (
    <div style={{ gridColumn: 2, gridRow: 1, display: "flex" }}>
      <div>
        <Stories />
        <span>Stories</span>
      </div>
      <div>
        <Reels />
        <span>Reels</span>
      </div>
    </div>
  );
};
