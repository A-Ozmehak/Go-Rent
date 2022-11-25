import React, { useCallback, useState } from "react";
import { Formik } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import TextInput from "../inputs/TextInput";
import { Flex, VStack, Text } from "@chakra-ui/layout";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  Heading,
  Spinner,
  Textarea,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/select";
import { categories } from "../../mockData";
import { useDropzone } from "react-dropzone";

const ListingForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const onDrop = useCallback(async (acceptedFiles: any) => {
    const file = acceptedFiles?.[0];

    const uploadFile = async function () {
      return null;
    };

    if (!file) {
      return;
    }

    setIsLoading(true);
    setError(null);
    setMessage("");

    try {
      await uploadFile();
      //what do do with file
    } catch (error) {
      setIsLoading(false);
      //   setError(e)
      return;
    }

    setIsLoading(false);
    setMessage("Uppladdningen lyckades!");
  }, []);

  //   dropzone is to drag pictures, if to be implemented on desktop later.

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        category: "",
        media: "",
        price: 0,
      }}
      onSubmit={(values) => { }}
    >
      {({ handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <Heading variant="h2">Skapa annons</Heading>
          <VStack spacing={4} align="flex-start">
            <FormControl isInvalid={!!errors.title && touched.title}>
              <FormLabel htmlFor="text">Titel</FormLabel>
              <TextInput
                as={Input}
                id="title"
                name="title"
                type="title"
                variant="filled"
                validate={(value: string) => {
                  let error;
                  if (value.length < 2) {
                    error = "Skriv in en titel för annonsen";
                  }
                  return error;
                }}
              />
              <FormErrorMessage>{errors.title}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.category && touched.category}>
              <FormLabel htmlFor="text">Kategori</FormLabel>
              <Select placeholder="Välj en kategori">
                {categories.map((category) => {
                  return (
                    <option key={category.id} value={category.title}>
                      {category.title}
                    </option>
                  );
                })}
              </Select>
              <FormErrorMessage>{errors.category}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.media && touched.media}>
              <Flex {...getRootProps()}>
                <input {...getInputProps()} />
                {isLoading ? (
                  <Spinner />
                ) : !isDragActive ? (
                  <Flex alignItems="center">
                    <FormLabel htmlFor="media">Ladda upp bilder</FormLabel>
                    <Input placeholder="Ladda upp bilder"
                      size="md"
                      type="file" />
                  </Flex>
                ) : null}
              </Flex>
              {(error || message) && (
                <Alert
                  status={error ? "error" : "success"}
                  w={250}
                  borderRadius={5}
                  m={2}
                >
                  <AlertIcon />
                  <AlertDescription w={200}>
                    {error || message}
                  </AlertDescription>
                </Alert>
              )}
            </FormControl>
            <FormControl isInvalid={!!errors.price && touched.price}>
              <FormLabel htmlFor="text">Pris per dygn</FormLabel>
              <TextInput
                as={Input}
                id="price"
                name="price"
                type="number"
                variant="filled"
                // TODO: number validation
                validate={(value) => {
                  let error;
                  if (value < "0") {
                    error = "Skriv in ett pris per dygn";
                  }
                  return error;
                }}
              />
              <FormErrorMessage>{errors.price}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={!!errors.description && touched.description}
            >
              <FormLabel htmlFor="text">Beskrivning</FormLabel>
              <TextInput
                as={Textarea}
                id="description"
                name="description"
                type="text"
                variant="filled"
                // TODO: number validation
                validate={(value: string) => {
                  let error;
                  if (value.length < 2) {
                    error = "Skriv in en detaljerad beskrivning för annonsen";
                  }
                  return error;
                }}
              />
              <FormErrorMessage>{errors.description}</FormErrorMessage>
            </FormControl>
            <Button variant="primary" type="submit">Skapa annons</Button>
          </VStack>
        </form>
      )}
    </Formik>
  );
};

export default ListingForm;
