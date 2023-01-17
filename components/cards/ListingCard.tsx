import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { listingInterface } from "../../utils/interface";
import BookingForm from "../forms/BookingForm";
import Link from "next/link";
import MinimalProfileCard from "./MinimalProfileCard.";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

interface props {
  listing: listingInterface;
}

const ListingCard = ({ listing }: props) => {
  const [loggedInUser] = useAuthState(auth);
  const user = loggedInUser?.uid;

  return (
    <Flex
      gap={[0, 0, 20]}
      direction={["column", "column", "row"]}
      marginTop={[5, 10, 20]}
      justifyContent="center"
      height="100%"
      maxW={1100}
    >
      {/* DESKTOP IMAGE */}
      <Image
        src={listing.media}
        alt={listing.title}
        width="50%"
        height={[0, 0, 400]}
        objectFit="cover"
        display={["none", "none", "block"]}
      />

      <Box w={["100%", "100%", "50%"]}>
        <Text
          textAlign="center"
          fontFamily="Josefin Sans !important"
          fontSize={[40, 50]}
        >
          {listing.title}
        </Text>
        {/* MOBILE IMAGE */}
        <Image
          src={listing.media}
          alt={listing.title}
          display={["block", "block", "none"]}
          objectFit={"cover"}
          w={"100%"}
          h={[180, 230]}
          mb={4}
        />
        <Flex
          minHeight="20rem"
          direction="column"
          justifyContent={"space-between"}
        >
          {/* MOBILE / TABLET */}
          <Flex
            direction="row"
            justifyContent="space-between"
            display={["flex", "flex", "none"]}
          >
            <Box>
              <h4>{listing.location}</h4>
              <Link href={`/profile/${listing.seller.id}`}>
                <MinimalProfileCard profile={listing.seller} />
              </Link>
            </Box>
            <h4>{listing.price}:- / dygn</h4>
          </Flex>

          <Box>
            <h4>Beskrivning</h4>
            <Text>{listing.description}</Text>
          </Box>
          {/* DESKTOP */}
          <Flex
            direction="row"
            display={["none", "none", "flex"]}
            justifyContent="space-between"
          >
            <h4>{listing.price}:- / dygn</h4>
            <Box>
              <h4>{listing.location}</h4>
              <Box>
                <Link href={`/profile/${listing.seller.id}`}>
                  <MinimalProfileCard profile={listing.seller} />
                </Link>
              </Box>
            </Box>
          </Flex>
          {listing.seller.id != user && (
            <Flex direction={"column"} gap={1}>
              <h4>Välj datum</h4>
              <BookingForm listing={listing} profile={listing.seller} />
            </Flex>
          )}
          {listing.seller.id === user && (
            <Flex direction={"column"} gap={1}>
              <h4>Detta är din annons</h4>
            </Flex>
          )}
        </Flex>
      </Box>
    </Flex>
  );
};

export default ListingCard;
