import ProfileCard from "../../components/cards/ProfileCard";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { getUser } from "../api/users";
import { Container, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { getListingsByUser } from "../api/listings";
import BookingCard from "../../components/cards/BookingCard";
import { getBookingsBySeller, getBookingsByUser } from "../api/bookings";
import MinimalListingCard from "../../components/cards/MinimalListingCard";
import { useRouter } from "next/router";

const ProfilePage = ({
  user,
  userListings,
  pendingBuyerBookings,
  pendingSellerBookings,
  rejectedBookings,
  acceptedBookings,
}: any) => {
  const [loggedInUser] = useAuthState(auth);
  const userID = loggedInUser?.uid;

  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  return (
    <Container maxW={1000}>
      <ProfileCard profile={user} profileImage={user.media} />
      {userID === user.id ? (
        <Text
          fontFamily="Josefin Sans !important"
          fontWeight="semi-bold"
          fontSize={20}
        >
          dina annonser
        </Text>
      ) : (
        <Text
          fontFamily="Josefin Sans !important"
          fontWeight="semi-bold"
          fontSize={20}
        >
          {user.username}s annonser
        </Text>
      )}
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {userListings.map((item: any) => (
          <GridItem key={item.id}>
            <MinimalListingCard listing={item} />
          </GridItem>
        ))}
      </Grid>
      {userID === user.id && (
        <Flex direction="column">
          <Text
            fontFamily="Josefin Sans !important"
            fontWeight="semi-bold"
            fontSize={20}
            mt={5}
          >
            Dina accepterade bokningar
          </Text>
          {acceptedBookings.length < 1 && (
            <Text>Du har inga accepterade bokningar.</Text>
          )}
          {acceptedBookings.map((item: any) => (
            <BookingCard
              refreshData={refreshData}
              booking={item}
              key={item.id}
            />
          ))}
          <Text
            mt={5}
            fontFamily="Josefin Sans !important"
            fontWeight="semi-bold"
            fontSize={20}
          >
            Dina nekade bokningar
          </Text>
          {rejectedBookings.length < 1 && (
            <Text>Du har inga nekade bokningar.</Text>
          )}
          {rejectedBookings.map((item: any) => (
            <BookingCard
              refreshData={refreshData}
              booking={item}
              key={item.id}
            />
          ))}
          <Text
            mt={5}
            fontFamily="Josefin Sans !important"
            fontWeight="semi-bold"
            fontSize={20}
          >
            Förfrågningar
          </Text>
          {pendingSellerBookings.map((item: any) => (
            <BookingCard
              refreshData={refreshData}
              booking={item}
              key={item.id}
            />
          ))}
          {pendingBuyerBookings.map((item: any) => (
            <BookingCard
              refreshData={refreshData}
              booking={item}
              key={item.id}
            />
          ))}
        </Flex>
      )}
    </Container>
  );
};

export async function getServerSideProps({ params }: any) {
  const user = await getUser(params.profile);
  const userListings = await getListingsByUser(params.profile);

  let bookings = await getBookingsByUser(params.profile);

  const pendingSellerBookings = bookings.filter(
    (booking) =>
      booking.status === "pending" && booking.seller.id === params.profile
  );

  const pendingBuyerBookings = bookings.filter(
    (booking) =>
      booking.status === "pending" && booking.buyer === params.profile
  );

  const acceptedBookings = bookings.filter(
    (booking) => booking.status === "accepted"
  );
  const rejectedBookings = bookings.filter(
    (booking) => booking.status === "rejected"
  );

  return {
    props: {
      user,
      userListings,
      pendingBuyerBookings,
      pendingSellerBookings,
      rejectedBookings,
      acceptedBookings,
    },
  };
}

export default ProfilePage;
