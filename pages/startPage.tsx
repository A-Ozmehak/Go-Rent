import { Box, Center, Flex, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import BookingForm from "../components/forms/BookingForm";
import { placeholderListing } from "../mockData";

export default function StartPage() {
  return (
    <div className="relative">
      {/*<Flex> TOP CONTAINER
                <Box className="hero-left" textStyle="headerText">
                    <h1 className="test">En klimatsatsning från Göteborgs stad, lär dig hur du kan göra skillnad.</h1>
                </Box>
                <Box className="hero-right">
                    <img className="heroImage" src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                </Box>
    </Flex>*/}
      <Flex direction="column">
        {placeholderListing.map((listing) => (
          <Box key={listing.id} className="listingBox">
            <Flex direction="row" width="100%">
              <img
                style={{ width: "30%", height: "30%", objectFit: "cover" }}
                src={listing.imageSrc}
                alt=""
              />
              <Box p="1rem" width="70%">
                <Flex
                  height="100%"
                  direction="column"
                  justifyContent="space-around"
                >
                  <Text textStyle="subHeader">{listing.title}</Text>
                  <p>{listing.location}</p>
                  <p style={{ alignSelf: "end" }}>fr {listing.price}</p>
                </Flex>
              </Box>
            </Flex>
          </Box>
        ))}
      </Flex>
      {/*Footer*/}
    </div>
  );
}
