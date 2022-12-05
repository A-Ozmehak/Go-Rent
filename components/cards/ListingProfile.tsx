import Image from "next/image";
import { listingInterface } from "../../utils/interface";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import Link from "next/link";
import { useState } from "react";
import { EditIcon } from "@chakra-ui/icons";

interface props {
  listing: listingInterface[];
}

const ListingProfile = ({ listing }: props) => {
  const [user] = useAuthState(auth);
  const currentUsername = auth.currentUser;
  const [hovering, setHovering] = useState(false);

  const handleMouseOver = () => {
    if (user?.uid && currentUsername) {
      setHovering(true);
    }
  };

  const handleMouseOut = () => {
    setHovering(false);
  };

  return (
    <>
      {listing?.map((listing) => (
        <Link key={listing.id} href={`/listings/${listing.id}`}>
          <Image
            key={listing.id}
            src={listing.media}
            alt="listing"
            width={55}
            height={55}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
          <h1>{listing.id}</h1>
        </Link>
      ))}
      {hovering && (
        <div>
          <p>Redigera</p>
          <EditIcon />
        </div>
      )}
    </>
  );
};
export default ListingProfile;
