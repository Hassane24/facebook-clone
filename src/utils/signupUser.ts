import { auth, db } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const signupUser = async (
  password: string,
  email: string,
  firstName: string,
  surname: string
) => {
  try {
    const createdUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await setDoc(doc(db, "users", firstName), {
      userID: createdUser.user.uid,
      firstName: firstName,
      surname: surname,
      email: email,
      password: password,
      loggedIn: true,
    });
  } catch (error) {
    console.log(error);
  }
};
