import React from "react";
import { useRouter } from 'next/router'
import ProfileCard from "../../components/cards/ProfileCard";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../config/firebase";
import {listingProfile, userInterface} from "../../utils/interface";
import ListingProfile from "../../components/cards/ListingProfile";


 export interface props {
    profileInfo: userInterface[]
     listing: listingProfile[]
}

const ProfilePage = ({profileInfo, listing}: props) => {
   const {
        query: { profile }
    } = useRouter()

    const [user] = useAuthState(auth);

    return(
        <div>
            <ProfileCard profileInfo={profileInfo} />
            <h3>{user?.displayName}s annonser</h3>

                <ListingProfile listing={listing} />

            <h3>Dina bokningar</h3>
            <h3>Mottagna förfrågningar</h3>
        </div>
    )
};

export default ProfilePage;