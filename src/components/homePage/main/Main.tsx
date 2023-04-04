import { Story } from "./story/Story";
import styles from "../../../styles/homePage/main/main.module.css";
import { WhatsOnYourMind } from "./whatsOnYourMind/WhatsOnYourMind";
import { PostCard } from "./postCard/PostCard";
import { useState, useEffect, useRef } from "react";
import { db, storage } from "../../../firebase/firebase";
import { getDocs, collection, setDoc, doc } from "firebase/firestore";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";

export const Main = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const textArea = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    getPostsFromDB();
  }, []);

  const getPostsFromDB = async () => {
    const postsFromDB: any[] = [];
    const results = await getDocs(collection(db, "posts"));
    results.forEach((doc) => postsFromDB.push(doc.data()));
    setPosts(postsFromDB);
  };

  const postStatus = async (e?: React.ChangeEvent<HTMLInputElement>) => {
    if (e) {
      if (e.target.files) setImage(e.target.files[0]);
    }
    try {
      const firstName = localStorage.getItem("first-name");
      const surname = localStorage.getItem("surname");
      const userPfpUrl = localStorage.getItem("profile-picture");
      const postInfo = {
        postName: new Date().getTime(),
        postText: textArea.current?.value,
        pictureUrl: "",
        userPfpUrl: userPfpUrl,
        firstName: firstName,
        surname: surname,
        reactions: {
          like: 0,
          love: 0,
          haha: 0,
          sad: 0,
          wow: 0,
          care: 0,
          angry: 0,
        },
      };

      if (image) {
        const imageRef = ref(storage, `post-images/${image?.lastModified}.png`);
        await uploadBytes(imageRef, image);
        const postPictureURL = await getDownloadURL(imageRef);
        postInfo.pictureUrl = postPictureURL;
        await setDoc(doc(db, "posts", `${new Date().getTime()}`), postInfo);
        setImage(null);
      } else {
        await setDoc(doc(db, "posts", `${new Date().getTime()}`), postInfo);
      }

      setPosts([...posts, postInfo]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.main}>
      <Story />
      <WhatsOnYourMind
        inputFileHandler={postStatus}
        image={image}
        ref={textArea}
      />
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
