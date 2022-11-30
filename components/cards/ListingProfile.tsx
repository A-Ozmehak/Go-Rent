import Image from "next/image";
import {listingProfile} from "../../utils/interface";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../config/firebase";
import Link from "next/link";
import {useState} from "react";
import EditIcon from "../icons/editIcon";

interface props {
    listing: listingProfile[];
}

const ListingProfile = ({listing} : props) => {
    const [user] = useAuthState(auth);
    const currentUsername = auth.currentUser;
    const [hovering, setHovering] = useState(false)

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
                            alt='listing'
                            width={15}
                            height={15}
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                        />
                    </Link>
                ))}
            {hovering &&
                <div>
                    <p>Redigera</p>
                    <EditIcon />
                </div>

            }
            </>

    )
}
export default ListingProfile;