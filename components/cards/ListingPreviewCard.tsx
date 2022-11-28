import React from "react";
import Image from "next/image";
import { placeholderListing } from "../../mockData";
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
} from "@chakra-ui/react";

const ListingPreviewCard = () => {
  const priceStyle = {
    marginLeft: { sm: "12rem" },
  };
  return (
    <Box>
      {placeholderListing.map((listing) => (
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
      ))}
    </Box>
  );
};

export default ListingPreviewCard;
