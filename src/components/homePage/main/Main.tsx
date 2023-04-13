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
  numberOfInteractions: number;
  allOfReactors: string[];
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
          allOfReactors: [],
          userPfpUrl: userPfpUrl,
          firstName: firstName,
          surname: surname,
          numberOfInteractions: 0,
          reactions: [
            { key: "like", number: 0, reactors: [] },
            { key: "love", number: 0, reactors: [] },
            { key: "care", number: 0, reactors: [] },
            { key: "haha", number: 0, reactors: [] },
            { key: "sad", number: 0, reactors: [] },
            { key: "wow", number: 0, reactors: [] },
            { key: "angry", number: 0, reactors: [] },
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
    const userID = localStorage.getItem("UserID") as string;
    setPosts((prevState) => {
      let newState = [...prevState];

      const chosenPost = newState.find(
        (post) => post.postName === postNameNumber
      ) as Post;

      const chosenReaction = chosenPost?.reactions.find(
        (reaction) => reaction.key === nameOfInteraction
      ) as reactionObject;

      // didUserReactToPost is true when a user hasn't reacted to a post yet and false when they have reacted to the post
      const didUserReactToPost = chosenPost.reactions.every(
        (reaction) => !reaction.reactors.includes(userID)
      );

      const userDidntHaveThisReactionBefore =
        !chosenReaction.reactors.includes(userID);

      const reactors = chosenReaction?.reactors as string[];

      if (didUserReactToPost) {
        chosenPost.allOfReactors = chosenPost.allOfReactors.concat(userID);
        chosenReaction.number++;
        reactors.push(userID);
        chosenPost.numberOfInteractions++;
        setDoc(
          doc(db, "posts", postNameString),
          {
            reactions: chosenPost.reactions,
            numberOfInteractions: chosenPost.numberOfInteractions,
            allOfReactors: chosenPost.allOfReactors,
          },
          { merge: true }
        );
      }

      if (userDidntHaveThisReactionBefore) {
        let reactionThatUserHadBefore = chosenPost.reactions.find((reaction) =>
          reaction.reactors.includes(userID)
        ) as reactionObject;
        reactionThatUserHadBefore.number--;
        chosenReaction.number++;
        reactionThatUserHadBefore.reactors =
          reactionThatUserHadBefore.reactors.filter((uid) => uid !== userID);
        chosenReaction.reactors.push(userID);
        setDoc(
          doc(db, "posts", postNameString),
          {
            reactions: chosenPost.reactions,
          },
          { merge: true }
        );
      }
      return newState;
    });
  };

  const removeReaction = (e: React.MouseEvent<HTMLDivElement>) => {
    const postName = (e.target as HTMLDivElement).id;
    const userID = localStorage.getItem("UserID");
    const chosenPost = posts.find(
      (post) => post.postName.toString() === postName
    );
    const reactions = chosenPost?.reactions;
    // didUserReactToPost is true when a user hasn't reacted to a post yet and false when they have reacted to the post
    if (userID && reactions !== undefined) {
      const didUserReactToPost = reactions.every(
        (reaction) => !reaction.reactors.includes(userID)
      );
      if (didUserReactToPost) {
        setPosts((prevState) => {
          let newState = [...prevState];

          const chosenPost = newState.find(
            (post) => post.postName.toString() === postName
          ) as Post;

          const chosenReaction = chosenPost?.reactions.find(
            (reaction) => reaction.key === "like"
          ) as reactionObject;

          const reactors = chosenReaction?.reactors as string[];

          chosenReaction.number++;

          reactors.push(userID);

          chosenPost.allOfReactors = chosenPost.allOfReactors.concat(userID);

          chosenPost.numberOfInteractions++;

          setDoc(
            doc(db, "posts", postName),
            {
              reactions: chosenPost.reactions,
              numberOfInteractions: chosenPost.numberOfInteractions,
              allOfReactors: chosenPost.allOfReactors,
            },
            { merge: true }
          );
          return newState;
        });
      } else {
        setPosts((prevState) => {
          let newState = [...prevState];

          const chosenPost = newState.find(
            (post) => post.postName.toString() === postName
          ) as Post;

          const userReaction = chosenPost?.reactions.find((reaction) =>
            reaction.reactors.includes(userID)
          ) as reactionObject;

          chosenPost.allOfReactors = chosenPost.allOfReactors.filter(
            (uid) => uid !== userID
          );

          userReaction.reactors = userReaction?.reactors.filter(
            (reactor) => reactor !== userID
          );

          userReaction.number = userReaction.number - 1;

          chosenPost.numberOfInteractions--;

          setDoc(
            doc(db, "posts", postName),
            {
              reactions: chosenPost.reactions,
              numberOfInteractions: chosenPost.numberOfInteractions,
              allOfReactors: chosenPost.allOfReactors,
            },
            { merge: true }
          );
          return newState;
        });
      }
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
            allOfReactors={post.allOfReactors}
            reactions={[...post.reactions]}
            dateOfCreation={post.dateOfCreation}
            numberOfInteractions={post.numberOfInteractions}
            postName={post.postName}
            surname={post.surname}
            firstName={post.firstName}
            postImage={post.pictureUrl}
            postText={post.postText}
            pfpURL={post.userPfpUrl}
            interactionHandler={interactionHandler}
            removeReaction={removeReaction}
          />
        </div>
      ))}
    </div>
  );
};
