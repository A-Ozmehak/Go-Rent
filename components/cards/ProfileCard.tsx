import React, {useState} from "react";
import {
    Card,
    CardBody,
    Box, Image, Button,
} from "@chakra-ui/react";
import EditIcon from "../icons/editIcon";
import { profileInterface } from "../../utils/interface";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../config/firebase";
import {useRouter} from "next/router";

interface props {
    profileInfo: profileInterface[]
}

const ProfileCard = ({profileInfo}: props) => {
    const profileBox = {
        width:  '100%',
        height: {base: '8em', lg: '10rem'},
        background: {base: '#DDDDDD', xl: '#EDEDED'},
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
    const card = {
        width: {base: '100%', lg: '75%'}
    }

    const profileImageStyle = {
        marginLeft: ".3rem",
        marginTop: '.6rem',
        width: {base: "2rem", md: "3rem", lg: "8rem"},
        height: {base: "2rem", md: "3rem", lg: "8rem"}
    };
    const container = {
        display: "flex",
    }
    const profileContainer = {
        display: "flex",
    }
    const userName = {
        marginLeft: '.5rem',
        marginTop: '.7rem'
    }
    const userBio = {
        width: {base: '100%', md: '30rem'},
        marginLeft: '1rem',
        padding: '0',
        display: 'flex',
        justifyContent: 'space-evenly',
        background: {base: '#EDEDED', xl: '#DDDDDD'}
    }

    const [user] = useAuthState(auth);

    return (
        <Box sx={profileBox}>
            <Card
                sx={card}
                direction={{base: 'row', sm: 'row'}}
                overflow='hidden'
                variant='outline'
            >
                {profileInfo.map((profile) => (
                    <div style={container} key={profile.id}>
                        <div style={profileContainer}>
                            <Image
                                sx={profileImageStyle}
                                src={profile.image}
                                alt="profile picture"
                            />

                            <div style={userName}>
                                <h3>{profile.username}</h3>
                                <p>{profile.location}</p>
                                {!user?.uid && <Button>Kontakta säljaren</Button>}
                            </div>
                        </div>

                        <CardBody sx={userBio}>
                            <p>{profile.bio}</p>
                            {user?.uid && <EditIcon />}

                        </CardBody>
                    </div>
                ))}
            </Card>
        </Box>
    )
}

export default ProfileCard;