import { useRouter } from "next/router";
import ListingPreviewCard from "../../components/cards/ListingPreviewCard";
import { Box, Text } from "@chakra-ui/react";


const FilteredPage = (props: any) => {
  const {
    query: { query },
  } = useRouter();

  // do the filter func here

  return (
    <Box>
      <h1>{query}</h1>
      <Text fontSize="2rem" pt="4rem" pl="2rem">
        Senast upplagt
      </Text>
      <ListingPreviewCard listings={[]} />
    </Box>
  );
};

export default FilteredPage;
