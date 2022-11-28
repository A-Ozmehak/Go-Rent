import React from "react";
import { Formik } from "formik";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import TextInput from "../inputs/TextInput";
import { app } from "../../firebase/firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { useRouter } from "next/router";

const LoginForm = () => {
  const auth = getAuth(app);
  const btnDiv = {
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
    marginBottom: "1rem",
  };

  const router = useRouter();

  const signIn = ({ email, password }: { email: any; password: any }) => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        return signInWithEmailAndPassword(auth, email, password);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // alert("Successfully signed in!");
        router.push("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
        //   const errorMessage = error.message;
      });
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          signIn(values);
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <FormControl isInvalid={!!errors.email && touched.email}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextInput
                as={Input}
                id="email"
                name="email"
                type="email"
                variant="filled"
                validate={(value: string) => {
                  let error;
                  if (value.length < 5) {
                    error = "Skriv in en email";
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
                  if (value.length < 5) {
                    error = "Lösenordet måste vara längre än 6 karaktärer";
                  }
                  return error;
                }}
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>

            <Text>Glömt ditt lösenord?</Text>
            <div style={btnDiv}>
              <Button variant="Primary" type="submit">
                Logga in
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
  //                 onSubmit={(values) => {
  //                 }}
  //             >
  //                 {({ handleSubmit, errors, touched }) => (
  //                     <form onSubmit={handleSubmit}>
  //                         <FormControl isInvalid={!!errors.email && touched.email}>
  //                             <FormLabel htmlFor="email">Email</FormLabel>
  //                             <TextInput
  //                                 as={Input}
  //                                 id="email"
  //                                 name="email"
  //                                 type="email"
  //                                 variant="filled"
  //                                 validate={(value: string) => {
  //                                     let error;
  //                                     if (value.length < 5) {
  //                                         error = "Skriv in en email"
  //                                     }
  //                                     return error
  //                                 }}
  //                             />
  //                             <FormErrorMessage>{errors.email}</FormErrorMessage>
  //                         </FormControl>
  //                         <FormControl isInvalid={!!errors.password && touched.password}>
  //                             <FormLabel htmlFor="password">Lösenord</FormLabel>
  //                             <TextInput
  //                                 as={Input}
  //                                 id="password"
  //                                 name="password"
  //                                 type="password"
  //                                 variant="filled"
  //                                 validate={(value: string) => {
  //                                     let error;
  //                                     if (value.length < 5) {
  //                                         error = "Lösenordet måste vara längre än 6 karaktärer"
  //                                     }
  //                                     return error
  //                                 }}
  //                             />
  //                             <FormErrorMessage>{errors.password}</FormErrorMessage>
  //                         </FormControl>

  //                         <Text>Glömt ditt lösenord?</Text>
  //                         <Box sx={btnDiv}>
  //                             <Button variant="Primary" type="submit">Logga in</Button>
  //                         </Box>
  //                     </form>
  //                 )}
  //             </Formik>
  //         </div>
  //     )
  // >>>>>>> main
};

export default LoginForm;
