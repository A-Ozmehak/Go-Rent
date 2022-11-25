import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Heading, Text, Box } from "@chakra-ui/react";
import { theme } from "../utils/theme";
import Navbar from "../components/navbar";
import Footer from "../components/layout/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
