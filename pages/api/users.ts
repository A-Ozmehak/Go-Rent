import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { userInterface } from "../../utils/interface";

export const getUser = async (id: string) => {
  const userDocRef = doc(db, "users", id);
  const docSnap = await getDoc(userDocRef);
  if (docSnap.exists()) {
    const user = docSnap.data();
    console.log(user);
    return { ...user, id: docSnap.id };
  } else {
    return null;
  }
};
