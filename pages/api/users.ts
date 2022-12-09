import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { userInterface } from "../../utils/interface";

export const getUser = async (id: string): Promise<userInterface | null> => {
  const userDocRef = doc(db, "users", id);
  const docSnap = await getDoc(userDocRef);
  if (docSnap.exists()) {
    const storedUser = docSnap.data();
    const user: userInterface = { ...storedUser, id: docSnap.id };
    return user;
  } else {
    return null;
  }
};

interface valueInterface {
  username: string;
  location: string;
  image: string;
  bio: string;
}

export const updateUser = async (
  id: string,
  values: valueInterface,
  setEdit: any,
  refreshData: any
) => {
  const userDocRef = doc(db, "users", id);
  const docSnap = await getDoc(userDocRef);
  if (docSnap.exists()) {
    let user = docSnap.data();
    if (values.username.length) {
      user.username = values.username;
    }
    if (values.bio.length) {
      user.bio = values.bio;
    }
    if (values.location.length) {
      user.location = values.location;
    }
    if (values.image.length) {
      user.image = values.image;
    }
    await setDoc(userDocRef, user);
    await setEdit();
    await refreshData();
  }
};
