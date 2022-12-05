import { Container } from "@chakra-ui/react";
import ListingCard from "../../components/cards/ListingCard";
import { getListing } from "../api/listings";

const ListingPage = ({ listing }: any) => {
  return <Container>{listing && <ListingCard listing={listing} />}</Container>;
};
export default ListingPage;

export async function getServerSideProps({ params }: any) {
  const listing = await getListing(params.listing);

  return {
    props: { listing },
  };
}
