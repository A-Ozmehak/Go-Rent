import ProfileCard from "../../components/cards/ProfileCard";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { userInterface } from "../../utils/interface";
import ListingProfile from "../../components/cards/ListingProfile";
import { getUsers } from "../api/users";
import { Box } from "@chakra-ui/react";
import { getUser } from "../api/users/[id]";
import { getListingsByUser } from "../api/listings";

const ProfilePage = ({ user, userListings }: any) => {
  const loggedInUser = useAuthState(auth);

  return (
    <Box>
      <ProfileCard profile={user} />
      <ListingProfile listing={userListings} />
      {/* {loggedInUser === profile && ( */}
        <Box>
          <h3>Dina bokningar</h3>
          <h3>Mottagna förfrågningar</h3>
        </Box>
      {/* )} */}
    </Box>
  );
};

export async function getStaticProps({ params }: any) {
  const user = await getUser(params.profile);
  const userListings = await getListingsByUser(params.profile)
  
  return {
    props: { user, userListings },
  };
}

export async function getStaticPaths() {
  const users = await getUsers();
  const paths = users.map((user: userInterface) => {
    return {
      params: {
        profile: user.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}


export default ProfilePage;
