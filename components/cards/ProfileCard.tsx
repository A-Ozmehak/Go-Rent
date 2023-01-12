import { useState } from "react";
import {
  Box,
  Image,
  Button,
  useDisclosure,
  Text,
  Flex,
  Avatar,
  IconButton,
} from "@chakra-ui/react";
import { userInterface } from "../../utils/interface";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import ContactModal from "../inputs/ContactModal";
import { CloseIcon, EditIcon } from "@chakra-ui/icons";
import EditProfileForm from "../forms/EditProfileForm";

interface props {
  profile: userInterface;
}

const ProfileCard = ({ profile }: props) => {
  const [loggedInUser] = useAuthState(auth);
  const currentProfile = profile.id;

  const [hovering, setHovering] = useState(false);
  const [edit, setEdit] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEdit = () => {
    setEdit(true);
  };

  const handleMouseOver = () => {
    if (edit) {
      return;
    } else if (loggedInUser?.uid && currentProfile) {
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
      {!edit && loggedInUser?.uid === currentProfile ? (
        <IconButton
          position="absolute"
          right="0"
          id="editProfile"
          icon={<EditIcon />}
          onClick={handleEdit}
          fontSize={30}
          aria-label={"edit"}
        />
      ) : null}
      {edit ? (
        <>
          <CloseIcon
            cursor="pointer"
            fontSize={20}
            right="0"
            position="absolute"
            onClick={() => setEdit(false)}
          />
          <EditProfileForm setEdit={setEdit} profile={profile} />
        </>
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
                <Avatar
                  width={[20, 100, 150]}
                  height={[20, 100, 150]}
                  bg="lightGray"
                  icon={<></>}
                  mr={[0, 3]}
                  fontSize={50}
                >
                  {profile.firstName?.charAt(0)}
                </Avatar>
              )}
              <ContactModal
                profile={profile}
                isOpen={isOpen}
                onClose={onClose}
              />
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
