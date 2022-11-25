import Head from "next/head";
import styles from "../styles/Home.module.css";
import ListingCard from "../components/cards/ListingCard";
import { Text, Heading, Box, Flex, Button, Center } from "@chakra-ui/react";
import { placeholderListing } from "../mockData";
import CategoryCarousel from "../components/inputs/CategoryCarousel";
import ListingPreviewCard from "../components/cards/ListingPreviewCard";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Go:Rent</title>
        <meta name="description" content="Go:Rent Uthyrning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CategoryCarousel/>
      <div className="hero">
        <Box pt="8rem" px="3rem" className="hero-box">
          <h1>
            En klimatsatsning från Göteborgs stad, lär dig hur du kan göra
            skillnad.
          </h1>
          <Button variant="primary">Läs mer</Button>
        </Box>
      </div>
      <Text fontSize="2rem" pt="4rem" pl="2rem">
        Senast upplagt
      </Text>
      <ListingPreviewCard />
      <div className="placeholder">
        <Flex
          m="0 auto"
          w="100%"
          h="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            w="100%"
            className="placeholderText"
            justifyContent="center"
            alignItems="center"
            h="50%"
          >
            <Text color="white" fontSize="2rem">
              Trångt i garaget?
            </Text>
            <Button fontSize="1rem" variant="secondary" ml="2rem">
              Lägg upp annons
            </Button>
          </Flex>
        </Flex>
      </div>
    </div>
  );
}
