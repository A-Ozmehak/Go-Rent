import { setPersistence, browserSessionPersistence, signInWithEmailAndPassword, getAuth } from "firebase/auth";
import router from "next/router";
import { app } from "../firebase/firebaseConfig";


const auth = getAuth(app)

export default function signIn({ email, password }: { email: string; password: string }) {
    console.log(email, password);

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
            router.push("/");
        })
        .catch((error) => {
            const errorCode = error.code;
            alert(errorCode);
        });
};