import {
  setPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import router from "next/router";
import { app } from "../config/firebase";

const auth = getAuth(app);

export default function signIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      return signInWithEmailAndPassword(auth, email, password);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      router.push("/profile/" + user.uid);
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === "auth/wrong-password") {
        alert("Fel lösenord");
      } else if (errorCode === "auth/user-not-found") {
        alert("Fel email");
      }
      //   const errorMessage = error.message;
    });
}
