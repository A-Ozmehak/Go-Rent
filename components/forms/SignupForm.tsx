import React, { useState } from "react";
import { Formik } from "formik";
import TextInput from "../inputs/TextInput";

import { app } from "../../firebase/firebaseConfig";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from "@chakra-ui/react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

const SignupForm = () => {
  const router = useRouter();
  // const [name, setName] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  function register({ email, password }: { email: any; password: any }) {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // alert("Created account successfully!");
        router.push("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
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
            <FormControl isInvalid={!!errors.name && touched.name}>
              <FormLabel htmlFor="name">Förnamn</FormLabel>
              <TextInput
                as={Input}
                id="name"
                name="name"
                type="name"
                variant="filled"
                validate={(value: string) => {
                  let error;
                  if (value.length < 2) {
                    error = "Skriv in ditt namn";
                  }
                  return error;
                }}
              />
              <FormErrorMessage>{errors.name}</FormErrorMessage>
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
                  if (value.length < 2) {
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
                  if (value.length < 5) {
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
                  if (value.length < 5) {
                    error = "Skriv in ditt lösenord";
                  }
                  return error;
                }}
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            <Button title="Registrera dig" type="submit">
              Registrera
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
  //       <div>
  //         <Formik
  //             initialValues={{
  //               name: "",
  //               lastName: "",
  //               email: "",
  //               password: "",
  //             }}
  //             onSubmit={(values) => {

  //             }}
  //         >
  //           {({handleSubmit, errors, touched}) => (
  //               <form onSubmit={handleSubmit}>
  //                 <FormControl isInvalid={!!errors.name && touched.name}>
  //                   <FormLabel htmlFor="name">Förnamn</FormLabel>
  //                   <TextInput
  //                       as={Input}
  //                       id="name"
  //                       name="name"
  //                       type="name"
  //                       variant="filled"
  //                       validate={(value: string) => {
  //                         let error;
  //                         if (value.length < 2) {
  //                           error = "Skriv in ditt namn"
  //                         }
  //                         return error
  //                       }}
  //                   />
  //                   <FormErrorMessage>{errors.name}</FormErrorMessage>
  //                 </FormControl>
  //                 <FormControl isInvalid={!!errors.lastName && touched.lastName}>
  //                   <FormLabel htmlFor="password">Efternamn</FormLabel>
  //                   <TextInput
  //                       as={Input}
  //                       id="lastName"
  //                       name="lastName"
  //                       type="lastName"
  //                       variant="filled"
  //                       validate={(value: string) => {
  //                         let error;
  //                         if (value.length < 2) {
  //                           error = "Skriv in ditt efternamn"
  //                         }
  //                         return error
  //                       }}
  //                   />
  //                   <FormErrorMessage>{errors.lastName}</FormErrorMessage>
  //                 </FormControl>
  //                 <FormControl isInvalid={!!errors.email && touched.email}>
  //                   <FormLabel htmlFor="password">Email</FormLabel>
  //                   <TextInput
  //                       as={Input}
  //                       id="email"
  //                       name="email"
  //                       type="email"
  //                       variant="filled"
  //                       validate={(value: string) => {
  //                         let error;
  //                         if (value.length < 5) {
  //                           error = "Skriv in din email"
  //                         }
  //                         return error
  //                       }}
  //                   />
  //                   <FormErrorMessage>{errors.email}</FormErrorMessage>
  //                 </FormControl>
  //                 <FormControl isInvalid={!!errors.password && touched.password}>
  //                   <FormLabel htmlFor="password">Lösenord</FormLabel>
  //                   <TextInput
  //                       as={Input}
  //                       id="password"
  //                       name="password"
  //                       type="password"
  //                       variant="filled"
  //                       validate={(value: string) => {
  //                         let error;
  //                         if (value.length < 5) {
  //                           error = "Skriv in ditt lösenord"
  //                         }
  //                         return error
  //                       }}
  //                   />
  //                   <FormErrorMessage>{errors.password}</FormErrorMessage>
  //                 </FormControl>

  //                 <Button variant="Primary" type="submit">Registrera dig</Button>
  //               </form>
  //           )}
  //         </Formik>
  //       </div>
  // )
};

export default SignupForm;
