import {
  Box, Button,
  ButtonGroup, Card, CardBody,
  CardFooter, Divider, Input, Stack,
  Text
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const ListingCard = () => {
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
            src="/mockedListingCardPicture.png"
            alt="mocked"
            width="500"
            height="500"
          />
          <CardBody>
            <Stack mt="6" spacing="3">
              <Box sx={flexCenter}>
                <Image
                  style={profileImageStyle}
                  src="/monke.png"
                  alt="profile picture"
                  width="28"
                  height="28"
                />
                <Text fontWeight="bold">Monke</Text>
                <Text fontWeight="bold" sx={priceStyle}>
                  100:- / dygn
                </Text>
              </Box>
              <Divider sx={dividerStyle} width="132px" />
              <Text fontWeight="bold">Beskrivning</Text>
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, hic voluptates dicta totam voluptate necessitatibus
                autem incidunt odit, consectetur placeat fugiat, recusandae
                officia repellendus tenetur atque voluptatum id? At, voluptatem?
              </Text>
            </Stack>
            <Text sx={locationStyle}>Angered</Text>
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
