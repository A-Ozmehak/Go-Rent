
import { Box, Button, Container, Flex, Link } from "@chakra-ui/react";
import Image from "next/image";
import React from 'react'
import ListingCard from "../../components/cards/ListingCard";
import BookingForm from "../../components/forms/BookingForm";
import { CategoryDoc, listingInterface } from '../../utils/interface'


const CategoryPage = ({category} : any) => {
    return(
      <Container>
        <h1>{category.name}</h1>
      </Container>
    )
}
export default CategoryPage




export async function getStaticProps({ params  } : any) {
    const data = await fetch(`http://localhost:3000/api/categories/${params.category}`)
    let category = await data.json()
    return {
      props: { category },
    };
  }
  export async function getStaticPaths() {
    const data = await fetch(`http://localhost:3000/api/categories`)
    let categories = await data.json()
    const paths = categories.map((category : CategoryDoc) => {
      return {
        params: {
          category: category.id,
        },
      };
    });

    return {
      paths,
      fallback: false,
    };
  }