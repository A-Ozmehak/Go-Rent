import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Heading, Text, Box } from "@chakra-ui/react";
import { theme } from "../utils/theme";
import RegisterPage from "./register";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Heading>GO:RENT</Heading>
      <Box>
        <Text> hhfjdkhfjds </Text>
      </Box>
        <RegisterPage />
    </ChakraProvider>
  );
}
