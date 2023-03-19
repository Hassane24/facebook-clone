import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase";
export const fetchUserImage = async (userID: string | null) =>
  await getDownloadURL(ref(storage, `profile-pics/${userID}.png`));
