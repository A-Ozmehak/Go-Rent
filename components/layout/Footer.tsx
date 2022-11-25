import React, { CSSProperties } from "react";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  const mediaQueries = {
    display: { md: "flex" },
    justifyContent: { md: "space-around" },
    paddingTop: { md: "3.7rem", sm: "2rem" },
  };

  const footerStyle = {
    backgroundColor: "#F1F1F1",
    textAlign: "center",
  };

  const copyrightStyle = {
    marginTop: { sm: ".5rem", md: "2rem" },
  };

  return (
    <footer style={footerStyle as CSSProperties}>
      <Box sx={mediaQueries}>
        <Text pb=".3rem">Kontakta oss</Text>
        <Text pb=".3rem">
          <Link href="/login">
            <span>Logga in </span>
          </Link>
          <span>/ </span>
          <Link href="/register">
            <span>Registrera</span>
          </Link>
        </Text>
        <Text pb=".3rem">Vanliga frågor</Text>
      </Box>
      <Text sx={copyrightStyle}>Copyright 2022 - Göteborgs stadsfilial</Text>
    </footer>
  );
};

export default Footer;
