import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Heading, Text, Box } from "@chakra-ui/react";
import { theme } from "../utils/theme";
import Navbar from "../components/navbar";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
