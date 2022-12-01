import { ErrorMessage, Formik } from "formik";
import TextInput from "../inputs/TextInput";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { app } from "../../firebase/firebaseConfig";
import signIn from "../../utils/loginFunc";

const SignupForm = () => {
  interface userValues {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }

  function register(values: userValues) {
    console.log(values);
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        updateProfile(user, {
          // displayName exists on userCredentials along with photoUrl for avatar.
          displayName: values.username,
        });
        setDoc(doc(db, "users", user.uid), {
          // Things like first & lastname and description does not exist on userCredentials and needs firestore.
          firstName: capitalize(values.firstName),
          lastName: capitalize(values.lastName),
        });

        // alert("Created account successfully!");
        signIn(values);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  function capitalize(text: string) {
    return text[0].toUpperCase() + text.slice(1);
  }

  return (
    <Box>
      <Formik
        initialValues={{
          username: "",
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          register(values);
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <FormControl isInvalid={!!errors.username && touched.username}>
              <FormLabel htmlFor="username">Användarnamn</FormLabel>
              <TextInput
                as={Input}
                id="username"
                name="username"
                type="username"
                variant="filled"
                validate={(value: string) => {
                  let error;
                  if (value && value.length < 3) {
                    error = "Skriv in ditt användarnamn";
                  }
                  return error;
                }}
              />
              <FormErrorMessage>{errors.username}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.firstName && touched.firstName}>
              <FormLabel htmlFor="name">Förnamn</FormLabel>
              <TextInput
                as={Input}
                id="firstName"
                name="firstName"
                type="firstName"
                variant="filled"
                validate={(value: string) => {
                  let error;
                  if (value && value.length < 2) {
                    error = "Skriv in ditt namn";
                  }
                  return error;
                }}
              />
              <FormErrorMessage>{errors.firstName}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.lastName && touched.lastName}>
              <FormLabel htmlFor="password">Efternamn</FormLabel>
              <TextInput
                as={Input}
                id="lastName"
                name="lastName"
                type="lastName"
                variant="filled"
                validate={(value: string) => {
                  let error;
                  if (value && value.length < 2) {
                    error = "Skriv in ditt efternamn";
                  }
                  return error;
                }}
              />
              <FormErrorMessage>{errors.lastName}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.email && touched.email}>
              <FormLabel htmlFor="password">Email</FormLabel>
              <TextInput
                as={Input}
                id="email"
                name="email"
                type="email"
                variant="filled"
                validate={(value: string) => {
                  let error;
                  if (value && value.length < 5) {
                    error = "Skriv in din email";
                  }
                  return error;
                }}
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.password && touched.password}>
              <FormLabel htmlFor="password">Lösenord</FormLabel>
              <TextInput
                as={Input}
                id="password"
                name="password"
                type="password"
                variant="filled"
                validate={(value: string) => {
                  let error;
                  if (value && value.length < 6) {
                    error = "Skriv in ditt lösenord";
                  }
                  return error;
                }}
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            <Center py="1rem">
              <Button variant="Primary" type="submit">
                Registrera dig
              </Button>
            </Center>
          </form>
        )}
      </Formik>
    </Box >
  )
};

export default SignupForm;
