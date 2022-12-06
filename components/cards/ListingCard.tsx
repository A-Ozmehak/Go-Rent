import { Box, Card, CardBody, Divider, Stack, Text, Image, Flex } from "@chakra-ui/react";
import { listingInterface } from "../../utils/interface";
import BookingForm from "../forms/BookingForm";
import Link from "next/link";
import MinimalProfileCard from "./MinimalProfileCard.";

interface props {
  listing: listingInterface;
}

const ListingCard = ({ listing }: props) => {
  return (
    <Flex direction={["column","column","row"]} alignContent="center" marginTop={5}>
      <Image src={listing.media} alt="mocked" h={"100%"} display={["none","none", "block"]} />
      <Box>
        <Text textAlign="center" fontFamily={"Josefin Sans !important"} fontSize={[40, 50]}>{listing.title}</Text>
          <Image src={listing.media} alt={listing.title} display={["block", "block" , "none"]} objectFit={"cover"} w={"100%"} h={[180, 230]} />
            <Stack mt="6" spacing="3">       
              <Flex justifyContent={"space-between"} >
              <Box>
                <Link href={`/profile/${listing.seller.id}`}>
                  <MinimalProfileCard profile={listing.seller} />
                </Link>
                <Divider mt={5} width={"100%"} borderColor={"black"}/>
                </Box>
                <h4>
                  {listing.price}:- / dygn
                </h4>
              </Flex>
              <h4>Beskrivning</h4>
              <Text>{listing.description}</Text>
              <Text 
                fontFamily="Josefin Sans !important"
                fontSize="1.1rem" 
                textAlign={"right"}>
                 {listing.location}Angered
              </Text>
              <BookingForm listing={listing} />
            </Stack>
            
          
        </Box>
    </Flex>
  );
};

export default ListingCard;
