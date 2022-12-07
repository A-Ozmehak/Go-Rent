import ProfileCard from "../../components/cards/ProfileCard";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { getUser } from "../api/users";
import { Container, Flex, Grid, GridItem } from "@chakra-ui/react";

import { getListingsByUser } from "../api/listings";
import BookingCard from "../../components/cards/BookingCard";
import { getBookingsBySeller } from "../api/bookings";
import MinimalListingCard from "../../components/cards/MinimalListingCard";
import { useState } from "react";
import { useRouter } from "next/router";

const ProfilePage = ({
  user,
  userListings,
  pendingBookings,
  acceptedBookings,
  rejectedBookings,
}: any) => {
  const [loggedInUser] = useAuthState(auth);
  const userID = loggedInUser?.uid;
 
  const router = useRouter()

  const refreshData = () => {
    router.replace(router.asPath);
  }
  

  return (
    <Container>
      <ProfileCard profile={user} profileImage={user.media} />
      {userID === user.id ? (
        <h3>dina annonser</h3>
      ) : (
        <h3>{user.username}s annonser</h3>
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
          <h3>Dina accepterade bokningar</h3>
          {acceptedBookings.map((item: any) => (
            <BookingCard refreshData={refreshData} booking={item} key={item.id} />
          ))}
          <h3>Dina nekade bokningar</h3>
          {rejectedBookings.map((item: any) => (
            <BookingCard refreshData={refreshData}  booking={item} key={item.id} />
          ))}
          <h3>Mottagna förfrågningar</h3>
          {pendingBookings.map((item: any) => (
            <BookingCard refreshData={refreshData}  booking={item} key={item.id} />
          ))}
        </Flex>
      )}
    </Container>
  );
};

export async function getServerSideProps({ params }: any) {
  const user = await getUser(params.profile);
  const userListings = await getListingsByUser(params.profile);
  let bookings = await getBookingsBySeller(params.profile);

  const pendingBookings = bookings.filter(
    (booking) => booking.status === "pending"
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
      pendingBookings,
      acceptedBookings,
      rejectedBookings,
    },
  };
}

export default ProfilePage;
