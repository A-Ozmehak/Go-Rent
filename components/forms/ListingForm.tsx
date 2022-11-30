import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import TextInput from "../inputs/TextInput";
import { VStack } from "@chakra-ui/layout";
import { Button, Textarea } from "@chakra-ui/react";
import { Select } from "@chakra-ui/select";

import { collection, addDoc } from "firebase/firestore";

import { auth, db } from "../../config/firebase";
import router from "next/router";
import UploadMedia from "./UploadMedia";
import { CategoryDoc, listingInterface } from "../../utils/interface";
import { getCategories } from "../../pages/api/categories";
import { useAuthState } from "react-firebase-hooks/auth";

const ListingForm = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [loggedInUser] = useAuthState(auth);
  const [categories, setCategories] = useState<CategoryDoc[]>([]);

  const user = loggedInUser?.uid

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };
    fetchCategories();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleSubmit = async (values: listingInterface) => {
    const dbInstance = collection(db, "listing");

    try {
      const result = await addDoc(dbInstance, values);
      router.push(`listings/${result.id}`);
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
        seller: user,
      }}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {({ errors, touched, values, handleChange, setFieldValue }) => {
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
                    return <option key={category.id}>{category.name}</option>;
                  })}
                </Select>
                <FormErrorMessage>{errors.category}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.media && touched.media}>
                <FormLabel htmlFor="text">Bild</FormLabel>
                <UploadMedia
                  id="media"
                  updateField={setFieldValue}
                  value={values.media}
                />
              </FormControl>
              <FormControl isInvalid={!!errors.price && touched.price}>
                <FormLabel htmlFor="text">Pris per dygn</FormLabel>
                <TextInput
                  as={Input}
                  id="price"
                  name="price"
                  type="number"
                  variant="filled"
                  validate={(value: number) => {
                    let error;
                    if (value < 1) {
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
