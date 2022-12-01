import {
  setPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import router from "next/router";
import { app } from "../firebase/firebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      if (errorCode === "auth/wrong-password") {
        // alert("Fel lösenord");
        toast.error("Felaktigt lösenord!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.log(errorCode);
      } else if (errorCode === "auth/user-not-found") {
        toast.error("Felaktig email!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.log(errorCode);
        // alert("Fel email");
      }
      //   const errorMessage = error.message;
    });
  return (
    <div>
      <ToastContainer />
    </div>
  );
}
