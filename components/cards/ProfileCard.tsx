import React, { useState } from "react";
import {
  Card,
  CardBody,
  Box,
  Image,
  Button,
  useDisclosure,
  Text,
  Flex,
  AspectRatio,
} from "@chakra-ui/react";
import { userInterface } from "../../utils/interface";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import ContactModal from "../inputs/ContactModal";
import { EditIcon } from "@chakra-ui/icons";
import EditForm from "../forms/EditForm";
import { MediaProps } from "../forms/UploadMedia";
const bioBackground = "../../assets/bioBackground";

interface props {
  profile: userInterface;
  profileImage: MediaProps;
}

const ProfileCard = ({ profile, profileImage }: props) => {
  const [loggedInUser] = useAuthState(auth);
  const currentProfile = profile.id;
  //   const authAUser = getAuth();
  const loggedInUsername = auth.currentUser;

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
    <Box
      position="relative"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {hovering && loggedInUser?.uid && currentProfile && (
        <Button
          position="absolute"
          background="transparent"
          onClick={handleEdit}
          _hover={{
            background: "transparent",
          }}
        >
          <EditIcon fontSize={30} />
        </Button>
      )}
      {edit ? (
        <EditForm setEdit={setEdit} profile={profile} />
      ) : (
        <Flex
          width="100%"
          justifyContent="space-between"
          direction={["column", "column", "row"]}
          alignItems="center"
          backgroundColor="#EEEEEE"
        >
          <Flex
            direction="column"
            overflow="hidden"
            gap={3}
            p={[2, 5]}
            flexShrink={0}
            flex={1}
          >
            <Flex
              direction={["column", "column", "column", "row"]}
              alignItems="center"
            >
              {!!profile.image?.length ? (
                <Image
                  objectFit="cover"
                  width={[20, 100, 150]}
                  height={[20, 100, 150]}
                  borderRadius={1000}
                  src={profile.image}
                  alt="profile picture"
                  mr={[0, 3]}
                />
              ) : (
                <Text p={2} textAlign="center" bg="lightGray">
                  {profile.firstName?.charAt(0)}
                </Text>
              )}
              <ContactModal isOpen={isOpen} onClose={onClose} />
              <Box>
                <Text mb={-3} fontSize={[25, 30]}>
                  {profile.username}
                </Text>
                <Text fontSize={[15, 20]}>{profile.location}</Text>
              </Box>
            </Flex>
            {!!loggedInUser?.uid && currentProfile !== loggedInUser.uid && (
              <Button onClick={onOpen} variant="Primary">
                Kontakta säljaren
              </Button>
            )}{" "}
          </Flex>
          <Box flex={2} flexShrink={1} textAlign="center">
            <Text backgroundColor="white" p={[2, 10]}>
              {profile.bio}
            </Text>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default ProfileCard;
