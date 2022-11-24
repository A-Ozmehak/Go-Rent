import "../styles/globals.sass";
import type { AppProps } from "next/app";
import { ChakraProvider, Heading, Text, Box } from "@chakra-ui/react";
import { theme } from "../utils/theme";

import next from "next";
import CategoryCarousel from "../components/inputs/CategoryCarousel";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Heading>GO:RENT</Heading>
      <Box>
        <CategoryCarousel/>
        <Text> hhfjdkhfjds </Text>
      </Box>
    </ChakraProvider>
  );
}
