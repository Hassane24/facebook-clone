import { Story } from "./story/Story";
import styles from "../../../styles/homePage/main/main.module.css";
import { WhatsOnYourMind } from "./whatsOnYourMind/WhatsOnYourMind";
import { PostCard } from "./postCard/PostCard";
import { useState, useEffect, useRef } from "react";
import { db, storage } from "../../../firebase/firebase";
import { getDocs, collection, setDoc, doc } from "firebase/firestore";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";
import { reactionObject } from "./postCard/InteractWithPost";

interface Post {
  dateOfCreation: string;
  postName: number;
  postText: string | undefined;
  pictureUrl: string;
  userPfpUrl: string | null;
  firstName: string | null;
  surname: string | null;
  reactors: string[];
  numberOfInteractions: number;
  reactions: reactionObject[];
}

export const Main = () => {
  const [posts, setPosts] = useState<Post[]>([]);
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
      if (e.target.files) return setImage(e.target.files[0]);
    } else
      try {
        const firstName = localStorage.getItem("first-name");
        const surname = localStorage.getItem("surname");
        const userPfpUrl = localStorage.getItem("profile-picture");
        const postInfo: Post = {
          postName: new Date().getTime(),
          dateOfCreation: new Date().toISOString(),
          postText: textArea.current?.value,
          pictureUrl: "",
          userPfpUrl: userPfpUrl,
          firstName: firstName,
          surname: surname,
          reactors: [],
          numberOfInteractions: 0,
          reactions: [
            { key: "like", number: 0 },
            { key: "love", number: 0 },
            { key: "care", number: 0 },
            { key: "haha", number: 0 },
            { key: "sad", number: 0 },
            { key: "wow", number: 0 },
            { key: "angry", number: 0 },
          ],
        };

        if (image) {
          const imageRef = ref(
            storage,
            `post-images/${image?.lastModified}.png`
          );
          await uploadBytes(imageRef, image);
          const postPictureURL = await getDownloadURL(imageRef);
          postInfo.pictureUrl = postPictureURL;
          await setDoc(doc(db, "posts", `${new Date().getTime()}`), postInfo);
          setImage(null);
        } else {
          await setDoc(doc(db, "posts", `${new Date().getTime()}`), postInfo);
        }

        setPosts([postInfo, ...posts]);
      } catch (error) {
        console.log(error);
      }
  };

  const interactionHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const nameOfInteraction = (e.target as HTMLElement).getAttribute("alt");
    const postNameNumber = parseInt((e.target as HTMLElement).id);
    const postNameString = (e.target as HTMLElement).id;
    const userID = localStorage.getItem("UserID");
    switch (nameOfInteraction) {
      case "like":
        setPosts((prevState) => {
          let newState = [...prevState];
          const chosenPost = newState.find(
            (post) => post.postName === postNameNumber
          );
          const chosenReaction = chosenPost?.reactions.find(
            (reaction) => reaction.key === nameOfInteraction
          );
          if (chosenPost && chosenReaction?.number !== undefined) {
            if (userID !== null && !chosenPost.reactors.includes(userID)) {
              chosenReaction.number++;
              chosenPost.reactors.push(userID);
              chosenPost.numberOfInteractions++;
            }
            setDoc(
              doc(db, "posts", postNameString),
              {
                reactions: chosenPost.reactions,
                reactors: chosenPost.reactors,
                numberOfInteractions: chosenPost.numberOfInteractions,
              },
              { merge: true }
            );
          }
          return newState;
        });

        break;
      case "love":
        setPosts((prevState) => {
          let newState = [...prevState];
          const chosenPost = newState.find(
            (post) => post.postName === postNameNumber
          );
          const chosenReaction = chosenPost?.reactions.find(
            (reaction) => reaction.key === nameOfInteraction
          );
          if (chosenPost && chosenReaction?.number !== undefined) {
            if (userID !== null && !chosenPost.reactors.includes(userID)) {
              chosenReaction.number++;
              chosenPost.reactors.push(userID);
              chosenPost.numberOfInteractions++;
            }
            setDoc(
              doc(db, "posts", postNameString),
              {
                reactions: chosenPost.reactions,
                reactors: chosenPost.reactors,
                numberOfInteractions: chosenPost.numberOfInteractions,
              },
              { merge: true }
            );
          }
          return newState;
        });
        break;

      case "care":
        setPosts((prevState) => {
          let newState = [...prevState];
          const chosenPost = newState.find(
            (post) => post.postName === postNameNumber
          );
          const chosenReaction = chosenPost?.reactions.find(
            (reaction) => reaction.key === nameOfInteraction
          );
          if (chosenPost && chosenReaction?.number !== undefined) {
            if (userID !== null && !chosenPost.reactors.includes(userID)) {
              chosenReaction.number++;
              chosenPost.reactors.push(userID);
              chosenPost.numberOfInteractions++;
            }
            setDoc(
              doc(db, "posts", postNameString),
              {
                reactions: chosenPost.reactions,
                reactors: chosenPost.reactors,
                numberOfInteractions: chosenPost.numberOfInteractions,
              },
              { merge: true }
            );
          }
          return newState;
        });
        break;

      case "haha":
        setPosts((prevState) => {
          let newState = [...prevState];
          const chosenPost = newState.find(
            (post) => post.postName === postNameNumber
          );
          const chosenReaction = chosenPost?.reactions.find(
            (reaction) => reaction.key === nameOfInteraction
          );
          if (chosenPost && chosenReaction?.number !== undefined) {
            if (userID !== null && !chosenPost.reactors.includes(userID)) {
              chosenReaction.number++;
              chosenPost.reactors.push(userID);
              chosenPost.numberOfInteractions++;
            }
            setDoc(
              doc(db, "posts", postNameString),
              {
                reactions: chosenPost.reactions,
                reactors: chosenPost.reactors,
                numberOfInteractions: chosenPost.numberOfInteractions,
              },
              { merge: true }
            );
          }
          return newState;
        });
        break;

      case "wow":
        setPosts((prevState) => {
          let newState = [...prevState];
          const chosenPost = newState.find(
            (post) => post.postName === postNameNumber
          );
          const chosenReaction = chosenPost?.reactions.find(
            (reaction) => reaction.key === nameOfInteraction
          );
          if (chosenPost && chosenReaction?.number !== undefined) {
            if (userID !== null && !chosenPost.reactors.includes(userID)) {
              chosenReaction.number++;
              chosenPost.reactors.push(userID);
              chosenPost.numberOfInteractions++;
            }
            setDoc(
              doc(db, "posts", postNameString),
              {
                reactions: chosenPost.reactions,
                reactors: chosenPost.reactors,
                numberOfInteractions: chosenPost.numberOfInteractions,
              },
              { merge: true }
            );
          }
          return newState;
        });
        break;

      case "sad":
        setPosts((prevState) => {
          let newState = [...prevState];
          const chosenPost = newState.find(
            (post) => post.postName === postNameNumber
          );
          const chosenReaction = chosenPost?.reactions.find(
            (reaction) => reaction.key === nameOfInteraction
          );
          if (chosenPost && chosenReaction?.number !== undefined) {
            if (userID !== null && !chosenPost.reactors.includes(userID)) {
              chosenReaction.number++;
              chosenPost.reactors.push(userID);
              chosenPost.numberOfInteractions++;
            }
            setDoc(
              doc(db, "posts", postNameString),
              {
                reactions: chosenPost.reactions,
                reactors: chosenPost.reactors,
                numberOfInteractions: chosenPost.numberOfInteractions,
              },
              { merge: true }
            );
          }
          return newState;
        });
        break;

      case "angry":
        setPosts((prevState) => {
          let newState = [...prevState];
          const chosenPost = newState.find(
            (post) => post.postName === postNameNumber
          );
          const chosenReaction = chosenPost?.reactions.find(
            (reaction) => reaction.key === nameOfInteraction
          );
          if (chosenPost && chosenReaction?.number !== undefined) {
            if (userID !== null && !chosenPost.reactors.includes(userID)) {
              chosenReaction.number++;
              chosenPost.reactors.push(userID);
              chosenPost.numberOfInteractions++;
            }
            setDoc(
              doc(db, "posts", postNameString),
              {
                reactions: chosenPost.reactions,
                reactors: chosenPost.reactors,
                numberOfInteractions: chosenPost.numberOfInteractions,
              },
              { merge: true }
            );
          }
          return newState;
        });
        break;
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
      {posts.map((post) => (
        <div key={post.postName}>
          <PostCard
            reactions={post.reactions}
            dateOfCreation={post.dateOfCreation}
            numberOfInteractions={post.numberOfInteractions}
            postName={post.postName}
            surname={post.surname}
            firstName={post.firstName}
            postImage={post.pictureUrl}
            postText={post.postText}
            pfpURL={post.userPfpUrl}
            interactionHandler={interactionHandler}
          />
        </div>
      ))}
    </div>
  );
};
