import { CategoryDoc, listingInterface } from "../../utils/interface";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../config/firebase";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  Textarea,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import UploadMedia from "../forms/UploadMedia";
import TextInput from "../inputs/TextInput";
import { getCategories } from "../../pages/api/categories";
import { setDoc, doc } from "firebase/firestore";
import router from "next/router";

interface props {
  listing: listingInterface;
}

const MinimalListingCard = ({ listing }: props) => {
  const [user] = useAuthState(auth);
  const currentUsername = auth.currentUser;
  const [hovering, setHovering] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleSubmit = async (values: listingInterface) => {
    try {
      if (listing.id) {
        await setDoc(doc(db, "listing", listing.id), values);
        router.push(`/listings/${listing.id}`);
      }
    } catch (e) {
      return;
    }
  };

  const handleMouseOver = () => {
    setHovering(true);
  };

  const handleMouseOut = () => {
    setHovering(false);
  };

  const [categories, setCategories] = useState<CategoryDoc[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  const EditListingModal = ({ listing }: props) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Redigera annons</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {user && (
              <Formik
                initialValues={{
                  id: listing.id,
                  title: listing.title,
                  description: listing.description,
                  category: listing.category,
                  media: listing.media,
                  price: listing.price,
                  seller: listing.seller,
                }}
                onSubmit={(values) => {
                  handleSubmit(values);
                }}
              >
                {({ errors, touched, values, handleChange, setFieldValue }) => {
                  return (
                    <Form>
                      <VStack spacing={4} align="flex-start">
                        <FormControl
                          isInvalid={!!errors.title && touched.title}
                        >
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
                        <FormControl
                          isInvalid={!!errors.category && touched.category}
                        >
                          <FormLabel htmlFor="text">Kategori</FormLabel>
                          <Select
                            name="category"
                            value={values.category}
                            onChange={handleChange}
                            placeholder="Välj en kategori"
                          >
                            {categories.map((category) => {
                              return (
                                <option key={category.id}>
                                  {category.name}
                                </option>
                              );
                            })}
                          </Select>
                          <FormErrorMessage>{errors.category}</FormErrorMessage>
                        </FormControl>
                        <FormControl
                          isInvalid={!!errors.media && touched.media}
                        >
                          {listing.media && (
                            <>
                              <Text>Nuvarande bild:</Text>
                              <Image
                                h={150}
                                alt={listing.title}
                                src={listing.media}
                              />
                            </>
                          )}
                          <FormLabel htmlFor="text">
                            Ladda upp en annan bild
                          </FormLabel>
                          <UploadMedia
                            id="media"
                            updateField={setFieldValue}
                            value={values.media}
                          />
                        </FormControl>
                        <FormControl
                          isInvalid={!!errors.price && touched.price}
                        >
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
                          isInvalid={
                            !!errors.description && touched.description
                          }
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
                          <FormErrorMessage>
                            {errors.description}
                          </FormErrorMessage>
                        </FormControl>
                        <Center w="100%" py="1rem">
                          {/* TODO: Open modal to remove a listing */}
                          <Button variant="Reject" mr={3}>
                            Ta bort
                          </Button>
                          <Button variant="Primary" mr={3} type="submit">
                            Spara
                          </Button>
                        </Center>
                      </VStack>
                    </Form>
                  );
                }}
              </Formik>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };

  return (
    listing && (
      <Flex
        width={180}
        bgImage={listing.media}
        height={20}
        bgPosition="center"
        bgRepeat="no-repeat"
        borderRadius="0.5rem"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        alignItems="center"
        justifyContent="center"
      >
        <EditListingModal listing={listing} />

        {hovering &&
          (user?.uid && currentUsername ? (
            <Text
              cursor="pointer"
              color="white"
              fontWeight="bold"
              fontSize={20}
              onClick={onOpen}
            >
              Redigera Annons
            </Text>
          ) : (
            <Link href={`/listings/${listing.id}`}>
              <Text>Visa Annons</Text>
            </Link>
          ))}
      </Flex>
    )
  );
};

export default MinimalListingCard;