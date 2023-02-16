import { auth, db, storage } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

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
      await setDoc(doc(db, "users", firstName), {
        userID: createdUser.user.uid,
        firstName: firstName,
        surname: surname,
        email: email,
        password: password,
        loggedIn: true,
        profileImage: `profile-pics/${createdUser.user.uid}.png`,
      });

      const profileImageRef = ref(
        storage,
        `profile-pics/${createdUser.user.uid}.png`
      );

      await uploadBytes(profileImageRef, image);
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