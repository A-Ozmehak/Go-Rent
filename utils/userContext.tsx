import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { auth } from "../config/firebase";

interface UserContextInterface {
    username: string;
    setUsername: Function;

}

export const UserContext = createContext<UserContextInterface>({
    username: "",
    setUsername: () => false,

})

export default function UserProvider(props: any) {
    const [username, setUsername] = useState("");

    onAuthStateChanged(auth, (user) => {
        if (user) {
            //User is logged in
            user.displayName ? setUsername(user.displayName) : null

        } else {
            // User is signed out

        }
    });


    return (
        <UserContext.Provider
            value={{
                username,
                setUsername
            }}
            {...props}
        />
    )
}

export const useUserContext = () => useContext(UserContext)