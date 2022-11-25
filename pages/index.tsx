import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Head from "next/head";
import ListingPreviewCard from "../components/cards/ListingPreviewCard";
import CategoryCarousel from "../components/inputs/CategoryCarousel";


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
