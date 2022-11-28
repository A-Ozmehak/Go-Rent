import React from "react";
import { useRouter } from 'next/router'
import ProfileCard from "../../components/cards/ProfileCard";

const ProfilePage = () => {
   const {
        query: { profile }
    } = useRouter()


    return(
        <div>
            <h1>{profile}</h1>
            <ProfileCard />
        </div>
    )
};

export default ProfilePage;