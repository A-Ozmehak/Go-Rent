import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Heading, Text, Box } from "@chakra-ui/react";
import { Theme } from "../utils/theme";
import Navbar from "../components/navbar";
import "@fontsource/bebas-neue";
import "@fontsource/inter";
import "@fontsource/josefin-sans";
import 'material-icons/iconfont/material-icons.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={Theme}>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
