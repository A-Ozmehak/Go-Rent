import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { app } from "../../firebase/firebaseConfig";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

const UserStatusButton = () => {
  const auth = getAuth(app);
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // alert("Sign out successful!");
        router.push("/login");
      })
      .catch((error) => {
        // An error happened.
        alert("An error has occurred please try again.");
      });
  };
  return (
    <Box>
      {user && <Button onClick={logOut}>Logga ut</Button>}
      {!user && <Button onClick={() => router.push("/login")}>Logga in</Button>}
    </Box>
  );
};

export default UserStatusButton;
