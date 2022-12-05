import React, { useState } from "react";
import {
  Card,
  CardBody,
  Box,
  Image,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { userInterface } from "../../utils/interface";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import ContactModal from "../inputs/ContactModal";
import { EditIcon } from "@chakra-ui/icons";
import EditForm from "../forms/EditForm";
import { MediaProps } from "../forms/UploadMedia";

interface props {
  profile: userInterface;
  profileImage: MediaProps;
}

const ProfileCard = ({ profile, profileImage }: props) => {
  const [loggedInUser] = useAuthState(auth);
  const currentProfile = profile.id;

  const [hovering, setHovering] = useState(false);
  const [edit, setEdit] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEdit = () => {
    setEdit(true);
  };

  const handleMouseOver = () => {
    if (loggedInUser?.uid && currentProfile) {
      setHovering(true);
    }
  };

  const handleMouseOut = () => {
    setHovering(false);
  };

  return (
    <Box sx={profileBox}>
      {edit ? (
        <EditForm profileImage={profileImage} />
      ) : (
        <Card
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          sx={card}
          direction={{ base: "row", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <div style={container} key="id">
            <div style={profileContainer}>
              <Image
                sx={profileImageStyle}
                src={profile.image}
                alt="profile picture"
              />
              <ContactModal isOpen={isOpen} onClose={onClose} />
              <div style={userName}>
                <h3>{profile.username}</h3>
                <p>{profile.location}</p>
                {!!loggedInUser?.uid && currentProfile !== loggedInUser.uid && (
                  <Button onClick={onOpen} variant="Primary">
                    Kontakta säljaren
                  </Button>
                )}
              </div>
            </div>

            <CardBody sx={userBio}>
              <p>{profile.bio}</p>
              {hovering && loggedInUser?.uid && currentProfile && (
                <Button bg="#DDDDDD" onClick={handleEdit}>
                  <EditIcon />
                </Button>
              )}
            </CardBody>
          </div>
        </Card>
      )}
    </Box>
  );
};

const profileBox = {
  width: "100%",
  background: { base: "#DDDDDD", xl: "#EDEDED" },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const card = {
  width: { base: "100%", lg: "75%" },
};

export const profileImageStyle = {
  marginLeft: ".3rem",
  marginTop: ".6rem",
  width: { base: "2rem", md: "3rem", lg: "8rem" },
  height: { base: "2rem", md: "3rem", lg: "8rem" },
};
const container = {
  display: "flex",
};
const profileContainer = {
  display: "flex",
};
const userName = {
  marginLeft: ".5rem",
  marginTop: ".7rem",
};
const userBio = {
  width: { base: "100%", md: "30rem" },
  marginLeft: "1rem",
  padding: "0",
  display: "flex",
  justifyContent: "space-evenly",
  background: { base: "#EDEDED", xl: "#DDDDDD" },
};

export default ProfileCard;
