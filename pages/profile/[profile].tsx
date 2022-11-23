import React from "react";
import { useRouter } from 'next/router'

const ProfilePage = () => {
   const {
        query: { profile }
    } = useRouter()


    return(
        <div>
            <h1>{profile}</h1>
        </div>
    )
};

export default ProfilePage;