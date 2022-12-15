import {
  Box,
  Button,
  ButtonGroup,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { getAuth, signOut, deleteUser } from "firebase/auth";
import { deleteDoc, doc } from "firebase/firestore";
import { Formik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { app, db } from "../../config/firebase";
import { getListingsByUser } from "../../pages/api/listings";
import { updateUser } from "../../pages/api/users";
import { userInterface } from "../../utils/interface";
import TextInput from "../inputs/TextInput";
import UploadMedia from "./UploadMedia";

interface Props {
  profile: userInterface;
  setEdit: any;
}

const EditForm = ({ profile, setEdit }: Props) => {
  const [media, setMedia] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const logOut = () => {
    signOut(auth).catch((error) => {
      // console.error(error);
    });
  };

  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };
  const auth = getAuth(app);
  const [user] = useAuthState(auth);
  const userAuth = user?.uid;
  const currentUser = auth.currentUser;

  const removeAccount = async () => {
    try {
      if (userAuth && currentUser) {
        //logOut();
        deleteUser(currentUser);
        await deleteDoc(doc(db, "users", profile.id!));
        let listings = await getListingsByUser(profile.id!);
        for (let listing of listings) {
          console.log(listing);
          await deleteDoc(doc(db, "listing", listing.id!));
        }
        // console.log("deleted user");
        router.push("/");
      }
    } catch (e) {
      return;
    }
  };

  return (
    <Box>
      <Formik
        initialValues={{
          username: profile.username || "",
          location: profile.location || "",
          image: profile.image || media,
          bio: profile.bio || "",
        }}
        onSubmit={async (values) => {
          values.image = media;
          await updateUser(profile.id!, values, setEdit, refreshData);
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <FormLabel fontSize={20}>Redigera din profil</FormLabel>
            <FormLabel htmlFor="username">Användarnamn</FormLabel>
            <TextInput
              as={Input}
              id="username"
              name="username"
              type="username"
              variant="filled"
            />
            <FormLabel htmlFor="location">Plats</FormLabel>
            <TextInput
              as={Input}
              id="location"
              name="location"
              type="location"
              variant="filled"
            />
            <FormLabel htmlFor="bio">Beskrivning</FormLabel>
            <TextInput
              as={Textarea}
              id="bio"
              name="bio"
              type="text"
              variant="filled"
            />
            <FormLabel htmlFor="image">Profilbild</FormLabel>
            {profile.image && (
              <>
                <FormLabel>Nuvarande profilbild: </FormLabel>
                <Image
                  w={120}
                  objectFit="cover"
                  src={profile.image}
                  alt={profile.firstName}
                  mb={5}
                />
              </>
            )}

            <UploadMedia id="id" value="value" updateField={setMedia} />
            <ButtonGroup mt={5} gap={5}>
              <Button type="submit" variant="Accept">
                Spara
              </Button>
              <Button variant="Reject" onClick={onOpen}>
                Ta bort konto
              </Button>
            </ButtonGroup>
          </form>
        )}
      </Formik>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Vill du verkligen radera ditt konto?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontStyle="italic">
              Om du väljer att radera ditt konto så är det permanent och
              oåterkalleligt.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button variant="Reject" mr={3} onClick={() => removeAccount()}>
              Ja, ta bort mitt konto.
            </Button>
            <Button variant="Primary" onClick={onClose}>
              Nej
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default EditForm;
