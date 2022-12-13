import { Box, Heading } from "@chakra-ui/react";
import ListingPreviewCard from "../../components/cards/ListingPreviewCard";
import { CategoryDoc } from "../../utils/interface";
import { getCategory } from "../api/categories";
import { getListingsByCategory } from "../api/listings";

const CategoryPage = ({ listings, category }: any) => {
  return (
    <Box pt="1rem" maxW="1200px" m="auto">
      <Heading size="md" as="h3" p="0rem 0 0.5rem 0" pl="1rem">
        {category.name}
      </Heading>
      <ListingPreviewCard listings={listings} />
    </Box>
  );
};
export default CategoryPage;

export async function getServerSideProps({ params }: any) {
  const category = (await getCategory(params.category)) as CategoryDoc;
  const listings = await getListingsByCategory(params.category);
  if (!category) {
    return { notFound: true };
  }
  return {
    props: { listings, category },
  };
}
