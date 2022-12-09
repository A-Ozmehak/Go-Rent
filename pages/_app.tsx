import "../styles/globals.sass";
import type { AppProps } from "next/app";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { Theme } from "../utils/theme";
import "@fontsource/bebas-neue";
import "@fontsource/inter";
import "@fontsource/josefin-sans";
import "material-icons/iconfont/material-icons.css";
import Footer from "../components/layout/Footer";
import UserProvider from "../utils/userContext";
import Navbar from "../components/navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={Theme}>
      <UserProvider>
        <Box>
          <Navbar />
          <Component {...pageProps} />
        </Box>
        <Footer />
      </UserProvider>
    </ChakraProvider>
  );
}