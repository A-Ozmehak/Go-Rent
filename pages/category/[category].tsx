import { Box, Container, Heading } from "@chakra-ui/react";
import ListingPreviewCard from "../../components/cards/ListingPreviewCard";
import { CategoryDoc } from "../../utils/interface";
import { getCategory } from "../api/categories";
import { getListings } from "../api/listings";
import listings from "../listings";

const CategoryPage = ({ filteredListings, category }: any) => {
  
  return (
    <Box pt="1rem" maxW="1200px" m="auto">
      <Heading size="md" as="h3" p="0rem 0 0.5rem 0" pl="1rem">
        {category.name}
      </Heading>
      <ListingPreviewCard listings={filteredListings} />
    </Box>
  );
};
export default CategoryPage;

export async function getServerSideProps({ params }: any) {
  const category = await getCategory(params.category) as CategoryDoc;
  const listings = await getListings()
  
  const filteredListings = listings.filter((listing: any) => listing.category === (category ? category.name : ""))
  return {
    props: { filteredListings, category },
  };
}
