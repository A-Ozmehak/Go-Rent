import React from "react";
import {
    Card,
    CardBody,
    Stack,
    Text,
    Box, Image,
} from "@chakra-ui/react";


const ProfileCard = () => {
    const profileBox = {
        width: {sm: '24.3rem', md: '50rem'},
        background: '#DDDDDD'
    }
    const profileImageStyle = {
        marginLeft: ".2rem",
        marginTop: '.2rem',
        width: {sm: "2rem", md: "3rem"},
        height: {sm: "2rem", md: "3rem"}
    };
    const profileContainer = {
        display: "flex",
    }
    const userName = {
        marginLeft: '.5rem',
        marginTop: '.7rem'
    }
    const userBio = {
        width: {sm: '10rem', md: '30rem'},
        marginLeft: '1rem',
        padding: '0'
    }

    return (
        <Box sx={profileBox}>
            <Card
                direction={{base: 'row', sm: 'row'}}
                overflow='hidden'
                variant='outline'
            >
                <div style={profileContainer}>
                    <Image
                        sx={profileImageStyle}
                        src="/monke.png"
                        alt="profile picture"
                    />
                    <div style={userName}>
                        <h3>Monke</h3>
                        <p>Angered</p>
                    </div>
                </div>

                <CardBody sx={userBio}>
                    <p>Jag har för mycket prylar i mitt garage... Kan leverera inom en 1 mils radie.</p>
                </CardBody>

            </Card>
        </Box>
    )
}

export default ProfileCard;