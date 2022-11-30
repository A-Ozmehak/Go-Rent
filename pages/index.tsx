import Head from "next/head";
import { Text, Box, Flex, Button } from "@chakra-ui/react";
import ListingPreviewCard from "../components/cards/ListingPreviewCard";
import { listingInterface } from "../utils/interface";
import { getListings } from "./api/listings";
import Link from "next/link";

export async function getStaticProps() {
  const listings = await getListings();
  return {
    props: {
      listings,
    },
  };
}

export default function Index(props: any) {
  let listings: listingInterface[] = props.listings;
  listings.length = 4;
  return (
    <div>
      <Head>
        <title>Go:Rent</title>
        <meta name="description" content="Go:Rent Uthyrning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hero">
        <Box pt="8rem" px="3rem" className="hero-box">
          <h1>
            En klimatsatsning från Göteborgs stad, lär dig hur du kan göra
            skillnad.
          </h1>
          <Button variant="Primary">Läs mer</Button>
        </Box>
      </div>
      <Text fontSize="2rem" pt="4rem" pl="2rem">
        Senast upplagt
      </Text>
      <ListingPreviewCard listings={listings} />
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
            <Link href="/createListing">
              <Button fontSize="1rem" variant="secondary" ml="2rem">
                Lägg upp annons
              </Button>
            </Link>
          </Flex>
        </Flex>
      </div>
    </div>
  );
}
