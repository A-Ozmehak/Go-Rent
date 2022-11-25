import React from "react";
import {
    Card,
    CardBody,
    Stack,
    Text,
    Box, Image,
} from "@chakra-ui/react";
import SearchIcon from "../icons/editIcon";


const ProfileCard = () => {
    const profileBox = {
        width:  '100%',
        height: '8em',
        background: '#DDDDDD',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const profileImageStyle = {
        marginLeft: ".2rem",
        marginTop: '.2rem',
        width: {sm: "2rem", md: "3rem", xl: "8rem"},
        height: {sm: "2rem", md: "3rem", xl: "8rem"}
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
        padding: '0',
        display: 'flex',
        justifyContent: 'space-evenly',
        background: '#EDEDED'
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
                    <SearchIcon />
                </CardBody>

            </Card>
        </Box>
    )
}

export default ProfileCard;