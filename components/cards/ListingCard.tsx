import React from "react";
import Image from "next/image";
import Heading from "../typography/Heading";
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
} from "@chakra-ui/react";

const ListingCard = () => {
  const profileImageStyle = {
    marginRight: ".5rem",
  };

  const priceStyle = {
    marginLeft: { sm: "9rem", md: "14rem" },
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
      <div style={flexColumnCenter as React.CSSProperties}>
        <div style={headingStyle}>
          <Heading text="Lägenhet"></Heading>
        </div>
        <Card p={0} backgroundColor="#F0F0F0" sx={cardWidth} maxW="sm">
          <Image
            src="/mockedListingCardPicture.png"
            alt="mocked"
            width="500"
            height="500"
          />
          <CardBody>
            <Stack mt="6" spacing="3">
              <div style={flexCenter}>
                <Image
                  style={profileImageStyle}
                  src="/monke.png"
                  alt="profile picture"
                  width="28"
                  height="28"
                />
                <Heading text="Monke"></Heading>
                <Text sx={priceStyle}>100:-</Text>
              </div>
              <Divider style={dividerStyle} width="132px" />
              <Heading text="Beskrivning"></Heading>
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, hic voluptates dicta totam voluptate necessitatibus
                autem incidunt odit, consectetur placeat fugiat, recusandae
                officia repellendus tenetur atque voluptatum id? At, voluptatem?
              </Text>
            </Stack>
          </CardBody>
          <div style={dateStyle}>
            <Heading text="Välj datum:"></Heading>
          </div>
          <CardFooter style={cardFooterStyle}>
            <ButtonGroup spacing={20}>
              <input style={dateInputStyle} type="date" />
              <Button variant="primary" colorScheme="blue">
                Hyr
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </div>
    </Box>
  );
};

export default ListingCard;
