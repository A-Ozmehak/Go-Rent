import "../styles/globals.sass";
import type { AppProps } from "next/app";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { Theme } from "../utils/theme";
import "@fontsource/bebas-neue";
import "@fontsource/inter";
import "@fontsource/josefin-sans";
import "material-icons/iconfont/material-icons.css";
import Footer from "../components/layout/Footer";
import Navbar from "../components/navbar";
import ErrorBoundary from "../components/ErrorBoundary";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={Theme}>
        <Box>
          <Navbar />
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </Box>
        <Footer />
    </ChakraProvider>
  );
}
