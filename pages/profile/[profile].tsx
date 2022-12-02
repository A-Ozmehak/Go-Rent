import ProfileCard from "../../components/cards/ProfileCard";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { userInterface } from "../../utils/interface";
import ListingProfile from "../../components/cards/ListingProfile";
import { getUsers } from "../api/users";
import { Box } from "@chakra-ui/react";

const ProfilePage = ({ profile, listing }: any) => {
  const loggedInUser = useAuthState(auth);
  return (
    <Box>
      <ProfileCard profile={profile} />
      <ListingProfile listing={listing} />
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
  const users:[] = await getUsers();

  return {
    props: { users },
  };
}

export async function getStaticPaths() {
  const users:[] = await getUsers();

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
