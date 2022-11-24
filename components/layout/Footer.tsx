import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer>
      <Box paddingTop="1rem" backgroundColor="#F1F1F1" textAlign="center">
        <Text pb=".3rem">Kontakta oss</Text>
        <Text pb=".3rem">Logga in / registrera</Text>
        <Text pb=".3rem">Vanliga frågor</Text>
        <Text display="flex" justifyContent="center">
          Copyright 2022 - Göteborgs stadsfilial
        </Text>
      </Box>
    </footer>
  );
};

export default Footer;
