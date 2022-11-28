import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Button,
  ButtonGroup,
  Divider,
  propNames,
  Box,
  Heading,
  Flex,
  Link,
} from "@chakra-ui/react";
import { listingInterface } from "../../utils/interface";



interface props {
  listings : listingInterface[]
}

const ListingPreviewCard = ({listings} : props) => {
  const priceStyle = {
    marginLeft: { sm: "12rem" },
  };
  return (
    <Box>
      {listings.map((listing) => (
        <Link key={listing.id} href={`/listings/${listing.id}`}>
          <Box w="100%" className="listing-preview-card" key={listing.id}>
            <Card
              w="100%"
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              //   variant="filled"
            >
              <Image
                objectFit="cover"
                src="/mockedListingCardPicture.png"
                alt="Caffe Latte"
                width={250}
                height={250}
              />

              <Stack>
                <CardBody>
                  <Heading size="md">{listing.title}</Heading>

                  <Text py="2">{listing.location}</Text>
                </CardBody>
                <CardFooter>
                  <Text ml="12rem">{listing.price}</Text>
                </CardFooter>
              </Stack>
            </Card>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default ListingPreviewCard;
