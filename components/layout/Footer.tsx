import React, { CSSProperties } from "react";
import { AbsoluteCenter, Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";

const Footer = () => {
  const [user] = useAuthState(auth);

  const mediaQueries = {
    display: { md: "flex" },
    justifyContent: "center",
    gap: { md: "2rem", lg: "10rem" },
    paddingTop: { md: "3.7rem", sm: "2rem" },
  };

  const copyrightStyle = {
    marginTop: { sm: ".5rem", md: "2rem" },
  };

  return (
    <footer>
      <Box sx={mediaQueries}>
        <Text pb=".3rem">Kontakta oss</Text>
        {!user && (
          <Text pb=".3rem">
            <Link href="/login">
              <span>Logga in </span>
            </Link>
            <span>/ </span>
            <Link href="/register">
              <span>Registrera dig</span>
            </Link>
          </Text>
        )}
        <Text pb=".3rem">Vanliga frågor</Text>
      </Box>
      <Text sx={copyrightStyle}>Copyright 2022 - Göteborgs stadsfilial</Text>
    </footer>
  );
};

export default Footer;
