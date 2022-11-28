
import { Box, Button, Container, Flex, Link } from "@chakra-ui/react";
import Image from "next/image";
import React from 'react'
import ListingCard from "../../components/cards/ListingCard";
import BookingForm from "../../components/forms/BookingForm";
import { listingInterface } from '../../utils/interface'


const ListingPage = ({listing} : any) => {
    return(
      <Container>
        <ListingCard listing={listing} />
      </Container>
    )
}
export default ListingPage




export async function getStaticProps({ params  } : any) {
    const data = await fetch(`http://localhost:3000/api/listings/${params.listing}`)
    let listing = await data.json()
    return {
      props: { listing },
    };
  }
  export async function getStaticPaths() {
    const data = await fetch(`http://localhost:3000/api/mockdata`)
    let listings = await data.json()
    const paths = listings.map((listing : listingInterface) => {
      return {
        params: {
          listing: listing.id,
        },
      };
    });

    return {
      paths,
      fallback: false,
    };
  }