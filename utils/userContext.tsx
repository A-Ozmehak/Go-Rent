import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { auth } from "../config/firebase";


interface UserContextInterface {
    loggedInUsername: string;
    setLoggedInUsername: Function;

}

export const UserContext = createContext<UserContextInterface>({
    loggedInUsername: "",
    setLoggedInUsername: () => false,

})

export default function UserProvider(props: any) {
    const [loggedInUsername, setLoggedInUsername] = useState("");

    onAuthStateChanged(auth, (user) => {
        if (user) {
            //User is logged in
            user.displayName ? setLoggedInUsername(user.displayName) : null

        } else {
            // User is signed out
            setLoggedInUsername("")
        }
    });

    return (
        <UserContext.Provider
            value={{
                loggedInUsername,
                setLoggedInUsername
            }}
            {...props}
        />
    )
}

export const useUserContext = () => useContext(UserContext)