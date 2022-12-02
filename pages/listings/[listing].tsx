import { Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import ListingCard from "../../components/cards/ListingCard";
import { listingInterface } from "../../utils/interface";
import { getListings } from "../api/listings";
import { getListing } from "../api/listings/[id]";

const ListingPage = ({listing}: any) => {
  
  return (
    <Container>{listing && <ListingCard listing={listing} />}</Container>
  );
};
export default ListingPage;

export async function getStaticProps({ params }: any) {
  const listing = await getListing(params.listing);

  return {
    props: { listing },
  };
}

export async function getStaticPaths() {
  const listings = await getListings();
  const paths = listings.map((listing: listingInterface) => {
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
