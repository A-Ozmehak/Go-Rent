import { useRouter } from "next/router";
import ProfileCard from "../../components/cards/ProfileCard";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { userInterface } from "../../utils/interface";
import ListingProfile from "../../components/cards/ListingProfile";
import { getUsers } from "../api/users";

const ProfilePage = ({ listing }: any) => {
  const {
    query: { profile },
  } = useRouter();

  const [loggedInUser] = useAuthState(auth);

  return (
    <div>
      <ProfileCard user={profile} />
      <h3>{loggedInUser?.displayName}s annonser</h3>
      <ListingProfile listing={listing} />
      <h3>Dina bokningar</h3>
      <h3>Mottagna förfrågningar</h3>
    </div>
  );
};

export async function getStaticProps({ params }: any) {
  const users = await getUsers();

  return {
    props: { users },
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
