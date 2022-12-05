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

interface props {
  profile: userInterface;
}

const ProfileCard = ({ profile }: props) => {
  const [loggedInUser] = useAuthState(auth);
  //   const authAUser = getAuth();
  const loggedInUsername = auth.currentUser;

  const [edit, setEdit] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEdit = () => {
    setEdit(true);
  };

  return (
    <Box sx={profileBox}>
      <Card
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
              {!loggedInUsername && !loggedInUser?.uid ? (
                <Button onClick={onOpen} variant="Primary">
                  Kontakta säljaren
                </Button>
              ) : (
                ""
              )}
            </div>
          </div>

          <CardBody sx={userBio}>
            <p>{profile.bio}</p>
            {loggedInUser?.uid && loggedInUsername ? (
              <Button bg="#DDDDDD" onClick={handleEdit}>
                <EditIcon />
              </Button>
            ) : (
              ""
            )}
          </CardBody>
        </div>
      </Card>
    </Box>
  );
};

const profileBox = {
  width: "100%",
  height: { base: "8em", lg: "10rem" },
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
