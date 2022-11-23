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
} from "@chakra-ui/react";

const ListingCard = () => {
  const profileImageStyle = {
    marginRight: ".5rem",
  };

  const priceStyle = {
    marginLeft: "14rem",
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

  const test = {
    width: { sm: "300px", md: "500px" },
  };

  return (
    <div style={flexColumnCenter as React.CSSProperties}>
      <div style={headingStyle}>
        <Heading text="Lägenhet"></Heading>
      </div>
      <Card sx={test} maxW="sm">
        <CardBody>
          <Image
            src="/mockedListingCardPicture.png"
            alt="mocked"
            width="500"
            height="500"
          />
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
              <Text style={priceStyle}>100:-</Text>
            </div>
            <Divider style={dividerStyle} width="132px" />
            <Heading text="Beskrivning"></Heading>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              hic voluptates dicta totam voluptate necessitatibus autem incidunt
              odit, consectetur placeat fugiat, recusandae officia repellendus
              tenetur atque voluptatum id? At, voluptatem?
            </Text>
          </Stack>
        </CardBody>
        <div style={dateStyle}>
          <Heading text="Välj datum:"></Heading>
        </div>
        <CardFooter style={cardFooterStyle}>
          <ButtonGroup>
            <input type="date" />
            <Button variant="primary" colorScheme="blue">
              Hyr
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ListingCard;
