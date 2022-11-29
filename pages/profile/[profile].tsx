import React from "react";
import { useRouter } from 'next/router'
import ProfileCard from "../../components/cards/ProfileCard";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../config/firebase";
import { profileInterface } from "../../utils/interface";

interface props {
    profileInfo: profileInterface[]
}

const ProfilePage = ({profileInfo}: props) => {
   const {
        query: { profile }
    } = useRouter()

    const [user] = useAuthState(auth);

    return(
        <div>
            <p>{user?.email}</p>
            <p>hej</p>
            <h1>{profile}</h1>
            <ProfileCard profileInfo={profileInfo} />

        </div>
    )
};

export default ProfilePage;