import {
  setPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import router from "next/router";
import { app } from "../firebase/firebaseConfig";

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
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      return signInWithEmailAndPassword(auth, email, password);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // alert("Successfully signed in!");
      router.push("/profile/" + user.uid);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      alert(errorCode);
      //   const errorMessage = error.message;
    });
}
