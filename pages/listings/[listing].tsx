import { Container } from "@chakra-ui/react";
import ListingCard from "../../components/cards/ListingCard";
import { getListing } from "../api/listings";

const ListingPage = ({ listing }: any) => {
  return (
    <Container maxW={1000}>
      {listing && <ListingCard listing={listing} />}
    </Container>
  );
};
export default ListingPage;

export async function getServerSideProps({ params }: any) {
  const listing = await getListing(params.listing);
  if (!listing) {
    return { notFound: true };
  }
  return {
    props: { listing },
  };
}
