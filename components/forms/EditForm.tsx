import {
  Box,
  Button,
  ButtonGroup,
  FormLabel,
  Image,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
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

  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
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
              validate={(value: string) => {
                let error;
                if (value.length < 2) {
                  error = "Skriv in ett användarnamn";
                }
                return error;
              }}
            />
            <FormLabel htmlFor="location">Plats</FormLabel>
            <TextInput
              as={Input}
              id="location"
              name="location"
              type="location"
              variant="filled"
              validate={(value: string) => {
                let error;
                if (value.length < 2) {
                  error = "Skriv in en plats.";
                }
                return error;
              }}
            />
            <FormLabel htmlFor="bio">Beskrivning</FormLabel>
            <TextInput
              as={Textarea}
              id="bio"
              name="bio"
              type="text"
              variant="filled"
              validate={(value: string) => {
                let error;
                if (value.length < 2) {
                  error = "Skriv in en beskrivning om dig själv.";
                }
                return error;
              }}
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
              {/* TODO: open up modal with "are you sure you want to remove your account." */}
              <Button variant="Reject">Ta bort konto</Button>
            </ButtonGroup>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default EditForm;
