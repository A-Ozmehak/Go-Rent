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
  listing: listingInterface;
}

const ListingPreviewCard = ({ listing }: props) => {
  let description
  if (listing.description.length > 50) {
    description = listing.description.substring(0, 50) + "...";
  } else {
    description = listing.description
  }

  return (
    <Box key={listing.id} className="listing-preview-card">
      <Link href={`/listings/${listing.id}`}>
        <Card
          minHeight="min-content"
          // h="121px"
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
            <Text>{description}</Text>
            <Text mr={{ base: 0, sm: "2rem", md: "5rem" }} alignSelf="end">
              {listing.price}kr / dygn
            </Text>
          </CardBody>
        </Card>
      </Link>
    </Box>
  );
};

export default ListingPreviewCard;
