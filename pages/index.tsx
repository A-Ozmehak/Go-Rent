import Head from "next/head";
import { Text, Heading, Box, Flex, Button, Center } from "@chakra-ui/react";
import ListingPreviewCard from "../components/cards/ListingPreviewCard";
import { listingDoc } from "../utils/interface";


export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const listingsResponse = await fetch('http://localhost:3000/api/listings')
  const listings = await listingsResponse.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      listings,
    },
  }
}

export default function Index(props : any) {
  let listings : listingDoc[] = props.listings
  listings.length = 4
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
            <Button fontSize="1rem" variant="secondary" ml="2rem">
              Lägg upp annons
            </Button>
          </Flex>
        </Flex>
      </div>
    </div>
  );
}
