import ProfileCard from "../../components/cards/ProfileCard";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import ListingProfile from "../../components/cards/ListingProfile";
import { getUser } from "../api/users";
import { Box, Flex } from "@chakra-ui/react";
import { getListingsByUser } from "../api/listings";
import BookingCard from "../../components/cards/BookingCard";
import { getBookingsBySeller } from "../api/bookings";

const ProfilePage = ({
  user,
  userListings,
  pendingBookings,
  acceptedBookings,
  declinedBookings,
}: any) => {
  const [loggedInUser] = useAuthState(auth);
  const userID = loggedInUser?.uid;

  return (
    <Box>
      <ProfileCard profile={user} />
      <ListingProfile listing={userListings} />
      {userID === user.id && (
        <Flex direction="column">
          <h3>Dina accepterade bokningar</h3>
          {acceptedBookings.map((item: any) => (
            <BookingCard booking={item} key={item.id} />
          ))}
          <h3>Dina nekade bokningar</h3>
          {declinedBookings.map((item: any) => (
            <BookingCard booking={item} key={item.id} />
          ))}
          <h3>Mottagna förfrågningar</h3>
          {pendingBookings.map((item: any) => (
            <BookingCard booking={item} key={item.id} />
          ))}
        </Flex>
      )}
    </Box>
  );
};

export async function getServerSideProps({ params }: any) {
  const user = await getUser(params.profile);
  const userListings = await getListingsByUser(params.profile);
  console.log(userListings)
  let bookings = await getBookingsBySeller(params.profile)

  const pendingBookings = bookings.filter((booking) => booking.status === "pending")
  const acceptedBookings = bookings.filter((booking) => booking.status === "accepted")
  const declinedBookings = bookings.filter((booking) => booking.status === "declined")
  return {
    props: {
      user,
      userListings,
      pendingBookings,
      acceptedBookings,
      declinedBookings,
    },
  };
}

export default ProfilePage;
