import { auth, db, storage } from "../firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const signupUser = async (
  password: string,
  email: string,
  firstName: string,
  surname: string,
  image: File | Blob
) => {
  try {
    const createdUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (image) {
      const profileImageRef = ref(
        storage,
        `profile-pics/${createdUser.user.uid}.png`
      );

      await uploadBytes(profileImageRef, image);

      const imageLink = await getDownloadURL(
        ref(storage, `profile-pics/${createdUser.user.uid}.png`)
      );

      if (auth.currentUser)
        updateProfile(auth.currentUser, {
          displayName: firstName + " " + surname,
          photoURL: imageLink,
        });

      await setDoc(doc(db, "users", firstName), {
        userID: createdUser.user.uid,
        firstName: firstName,
        surname: surname,
        email: email,
        password: password,
        loggedIn: true,
        imageLink: imageLink,
        profileImage: `profile-pics/${createdUser.user.uid}.png`,
      });
    } else {
      await setDoc(doc(db, "users", firstName), {
        userID: createdUser.user.uid,
        firstName: firstName,
        surname: surname,
        email: email,
        password: password,
        loggedIn: true,
        profileImage: "",
      });
    }

    localStorage.setItem("UserID", createdUser.user.uid);
  } catch (error) {
    console.log(error);
  }
};
