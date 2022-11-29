import "../styles/globals.sass";
import type { AppProps } from "next/app";
import { ChakraProvider, Heading, Text, Box, Flex } from "@chakra-ui/react";
import { Theme } from "../utils/theme";
import Navbar from "../components/navbar";
import "@fontsource/bebas-neue";
import "@fontsource/inter";
import "@fontsource/josefin-sans";
import 'material-icons/iconfont/material-icons.css';
import Footer from "../components/layout/Footer";
import ProfilePage from "./profile/[profile]";
import {profile} from "./api/mockdata";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={Theme}>
      <Box>
          <ProfilePage profileInfo={profile}/>
        <Navbar />
        <Component {...pageProps} />
      </Box>
      <Footer />
    </ChakraProvider>
  );
}
