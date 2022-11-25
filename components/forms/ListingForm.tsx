import { useCallback, useState } from "react";
import { Form, Formik } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import TextInput from "../inputs/TextInput";
import { Flex, VStack } from "@chakra-ui/layout";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  Spinner,
  Textarea,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/select";
import { categories } from "../../mockData";
import { useDropzone } from "react-dropzone";
import { DownloadIcon } from "@chakra-ui/icons";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import router from "next/router";

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

  interface ListingDoc {
    title: string;
    description: string;
    category: string;
    media: string;
    price: number;
  }

  const handleSubmit = async (values: ListingDoc) => {
    const dbInstance = collection(db, "listing");

    try {
      const result = await addDoc(dbInstance, values);
      router.push(`listing/${result.id}`);
    } catch (e) {
      return;
    }
  };

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        category: "",
        media: "",
        price: 0,
      }}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {({ handleSubmit, errors, touched, values, handleChange }) => {
        return (
          <Form>
            <h1>Skapa annons</h1>
            <VStack spacing={4} align="flex-start">
              <FormControl isInvalid={!!errors.title && touched.title}>
                <FormLabel htmlFor="text">Titel</FormLabel>
                <TextInput
                  as={Input}
                  id="title"
                  name="title"
                  type="text"
                  variant="filled"
                  validate={(value: string) => {
                    let error;
                    if (value.length < 2) {
                      error = "Skriv in en titel";
                    }
                    return error;
                  }}
                />
                <FormErrorMessage>{errors.title}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.category && touched.category}>
                <FormLabel htmlFor="text">Kategori</FormLabel>
                <Select
                  name="category"
                  value={values.category}
                  onChange={handleChange}
                  placeholder="Välj en kategori"
                >
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
                  <input name="media" {...getInputProps()} />
                  {isLoading ? (
                    <Spinner />
                  ) : !isDragActive ? (
                    <Flex alignItems="center">
                      <FormLabel htmlFor="media">Ladda upp bilder</FormLabel>
                      <Button leftIcon={<DownloadIcon />}>Välj filer</Button>
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
                  validate={(value: string) => {
                    let error;
                    if (value.length < 1) {
                      error = "Skriv in ett pris";
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
                  validate={(value: string) => {
                    let error;
                    if (value.length < 2) {
                      error = "Skriv in en beskrivning";
                    }
                    return error;
                  }}
                />
                <FormErrorMessage>{errors.description}</FormErrorMessage>
              </FormControl>
              <Button variant="Primary" type="submit">
                Skapa annons
              </Button>
            </VStack>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ListingForm;
