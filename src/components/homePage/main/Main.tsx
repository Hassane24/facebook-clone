import { Story } from "./story/Story";
import styles from "../../../styles/homePage/main/main.module.css";
import { WhatsOnYourMind } from "./whatsOnYourMind/WhatsOnYourMind";
import { PostCard } from "./postCard/PostCard";
import { useState, useEffect } from "react";
import { db } from "../../../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

export const Main = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    getPostsFromDB();
  }, []);

  const getPostsFromDB = async () => {
    const postsFromDB: any[] = [];
    const results = await getDocs(collection(db, "posts"));
    results.forEach((doc) => postsFromDB.push(doc.data()));
    setPosts(postsFromDB);
  };

  return (
    <div className={styles.main}>
      <Story />
      <WhatsOnYourMind />
      {posts.map((post, index) => (
        <div key={index}>
          <PostCard
            surname={post.surname}
            firstName={post.firstName}
            postImage={post.pictureUrl}
            postText={post.postText}
            pfpURL={post.userPfpUrl}
          />
        </div>
      ))}
    </div>
  );
};
