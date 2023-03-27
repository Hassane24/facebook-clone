import { InteractWithPost } from "./InteractWithPost";
import { PostContent } from "./PostContent";
import { PostInfo } from "./PostInfo";

export const PostCard = () => {
  return (
    <div>
      <PostInfo />
      <PostContent />
      <InteractWithPost />
    </div>
  );
};
