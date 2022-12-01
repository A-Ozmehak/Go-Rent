import { Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import ListingCard from "../../components/cards/ListingCard";
import { listingInterface } from "../../utils/interface";
import { getListings } from "../api/listings";

const ListingPage = () => {
  const {
    query: { listing },
  } = useRouter();
  return (
    <Container>{listing && <ListingCard listing={listing} />}</Container>
  );
};
export default ListingPage;

export async function getStaticProps({ params }: any) {
  const listings = await getListings();

  return {
    props: { listings },
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
