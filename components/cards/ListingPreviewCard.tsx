import {
  Box,
  Card,
  CardBody,
  Heading,
  Img,
  Link,
  Text,
} from "@chakra-ui/react";
import { listingInterface } from "../../utils/interface";

interface props {
  listings: listingInterface[];
}

const ListingPreviewCard = ({ listings }: props) => {

  return (
    <Box>
      {listings.map((listing) => (
        <Box key={listing.id} className="listing-preview-card">
          <Link href={`/listings/${listing.id}`}>
            <Card
              h="121px"
              w="100%"
              display="flex"
              direction="row"
              overflow="hidden"
            >
              <Img
                className="listingImage"
                src={listing.media}
                alt="Listing image"
              />
              <CardBody display="flex" flexDirection="column" p="1rem">
                <Heading as="h4">{listing.title}</Heading>
                <Text>{listing.description}</Text>
                <Text mr={{ base: 0, sm: "2rem", md: "5rem" }} alignSelf="end">
                  {listing.price}kr / dygn
                </Text>
              </CardBody>
            </Card>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default ListingPreviewCard;
