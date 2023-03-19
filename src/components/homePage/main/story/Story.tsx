import { CreateStroyCard } from "./CreateStoryCard";
import { StoryReel } from "./StoryReel";
import styles from "../../../../styles/homePage/main/story.module.css";
export const Story = () => {
  return (
    <div className={styles.story}>
      <StoryReel />
      <CreateStroyCard />
    </div>
  );
};
