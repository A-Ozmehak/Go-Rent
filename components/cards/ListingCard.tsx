import {
  Box, Button,
  ButtonGroup, Card, CardBody,
  CardFooter, Divider, Input, Stack,
  Text
} from "@chakra-ui/react";
import { listingInterface } from "../../utils/interface";
import Image from "next/image";
import React from "react";


interface props {
  listing: listingInterface
}


const ListingCard = ({listing} : props) => {
  const profileImageStyle = {
    marginRight: ".5rem",
  };

  const locationStyle = {
    marginLeft: "12.8rem",
  };

  const priceStyle = {
    marginLeft: { sm: "5.9rem", md: "14rem" },
  };

  const dateStyle = {
    marginLeft: "1.2rem",
  };

  const cardFooterStyle = {
    padding: "0",
    marginBottom: "1rem",
    marginLeft: "1.2rem",
  };

  const flexColumnCenter = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const flexCenter = {
    display: "flex",
    alignItems: "center",
  };

  const headingStyle = {
    marginBottom: "1rem",
  };

  const dividerStyle = {
    borderColor: "black",
  };

  const cardWidth = {
    width: { sm: "300px" },
  };

  const hideOnDesktop = {
    display: { md: "none" },
  };

  const dateInputStyle = {
    backgroundColor: "#F0F0F0",
  };

  return (
    <Box sx={hideOnDesktop}>
      <Box sx={flexColumnCenter}>
        <Card p={0} backgroundColor="#F0F0F0" sx={cardWidth} maxW="sm">
          <Image
            src={listing.imageSrc}
            alt="mocked"
            width="500"
            height="500"
          />
          <CardBody>
            <Stack mt="6" spacing="3">
              <Box sx={flexCenter}>
                <Image
                  style={profileImageStyle}
                  src={listing.user.image}
                  alt="profile picture"
                  width="28"
                  height="28"
                />
                <Text fontWeight="bold">{listing.user.name}</Text>
                <Text fontWeight="bold" sx={priceStyle}>
                  100:- / dygn
                </Text>
              </Box>
              <Divider sx={dividerStyle} width="132px" />
              <Text fontWeight="bold">Beskrivning</Text>
              <Text>{listing.description}</Text>
            </Stack>
            <Text sx={locationStyle}>{listing.location}</Text>
          </CardBody>
          <Box sx={dateStyle}>
            <Text fontWeight="bold">Välj datum:</Text>
          </Box>
          <CardFooter sx={cardFooterStyle}>
            <ButtonGroup spacing={20}>
              <Input sx={dateInputStyle} type="date" />
              <Button variant="Primary" colorScheme="blue">
                Hyr
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Box>
    </Box>
  );
};

export default ListingCard;
