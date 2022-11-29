import React from "react";
import { useRouter } from 'next/router'
import ProfileCard from "../../components/cards/ProfileCard";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../config/firebase";
import { profileInterface } from "../../utils/interface";
import {Heading} from "@chakra-ui/react";

 export interface props {
    profileInfo: profileInterface[]
}

const ProfilePage = ({profileInfo}: props) => {
   const {
        query: { profile }
    } = useRouter()

    const [user] = useAuthState(auth);

    return(
        <div>
            <ProfileCard profileInfo={profileInfo} />
            <h3>{user?.displayName}s annonser</h3>
            <h3>Dina bokningar</h3>
            <h3>Mottagna förfrågningar</h3>
        </div>
    )
};

export default ProfilePage;