import Head from "next/head";
import {
  Box,
  Flex,
  Button,
  Heading,
  SystemStyleObject,
} from "@chakra-ui/react";
import ListingPreviewCard from "../components/cards/ListingPreviewCard";
import { getListings } from "./api/listings";
import { useRouter } from "next/router";
import Link from "next/link";
import SearchField from "../components/inputs/SearchField";

export async function getServerSideProps() {
  const listings = await getListings();
  return {
    props: {
      listings,
    },
  };
}

export default function Index({ listings }: any) {
  const router = useRouter();

  const readMoreBtn: SystemStyleObject = {
    alignSelf: { base: "end", sm: "center" },
    padding: { base: "none", sm: "0 3rem" },
  };

  const CTAboxOuter: SystemStyleObject = {
    width: "100%",
    height: "min-content",
    background: "rgba(0, 0, 0, 0.46)",
    padding: "0.5rem",
    justifyContent: "center",
  };

  const CTAboxInner: SystemStyleObject = {
    width: { base: "100%", sm: "450px" },
    flexDirection: { base: "row", sm: "column" },
    gap: "0.5rem",
  };

  const CTAbtn: SystemStyleObject = {
    alignSelf: "flex-end",
    background: "rgba(255, 255, 255, 0.73)",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 0,
    color: "#234B9A",
    padding: "0 2rem",
  };

  return (
    <Box>
      <Head>
        <title>Go:Rent</title>
        <meta name="description" content="Go:Rent Uthyrning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box maxW="1200px" m="auto">
        <Flex className="hero">
          <Flex
            sx={{ width: { base: "100%", sm: "650px" } }}
            gap="1rem"
            pt="2rem"
            px="1rem"
            flexDirection="column"
          >
            <Heading
              sx={{ fontSize: { base: "2rem", sm: "3rem" } }}
              variant="h2"
            >
              Gratis hemsida för Göteborgare, hyr & hyr ut alla möjliga prylar!
            </Heading>
            <Link href={"/register"}>
              <Button sx={readMoreBtn} variant="Primary">
                Skapa konto
              </Button>
            </Link>
          </Flex>
        </Flex>
        <Heading size="md" as="h3" p="4rem 0 0.5rem 0" pl="1rem">
          Senast upplagt
        </Heading>
        <ListingPreviewCard listings={listings} />

        <Flex className="placeholder" w="100%" h="100%" alignItems="center">
          <Flex sx={CTAboxOuter}>
            <Flex sx={CTAboxInner}>
              <Heading variant="h2" color="white">
                Trångt i garaget?
              </Heading>
              <Button onClick={() => router.push("/createListing")} sx={CTAbtn}>
                Lägg upp annons
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
