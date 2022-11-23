import React from "react";
import TextInput from "../components/inputs/TextInput";
import {Formik} from "formik"
import PrimaryButton from '../components/buttons/PrimaryButton';
import ShadowContainer from "../components/layout/ShadowContainer";
import {FormControl, FormLabel, Input, FormErrorMessage} from "@chakra-ui/react";

const RegisterPage = () => {
  return (
      <ShadowContainer>
        <h1>Registrera dig</h1>
        <h2>för att också bli en klimathjälte!</h2>
        <div>
          <Formik
              initialValues={{
                name: "",
                lastName: "",
                email: "",
                password: "",
              }}
              onSubmit={(values) => {

              }}
          >
            {({handleSubmit, errors, touched}) => (
                <form onSubmit={handleSubmit}>
                  <FormControl isInvalid={!!errors.name && touched.name}>
                    <FormLabel htmlFor="name">Email</FormLabel>
                    <TextInput
                        as={Input}
                        id="name"
                        name="name"
                        type="name"
                        variant="filled"
                        validate={(value: string) => {
                          let error;
                          if (value.length < 2) {
                            error = "Skriv in ditt namn"
                          }
                          return error
                        }}
                    />
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.lastName && touched.lastName}>
                    <FormLabel htmlFor="password">Lösenord</FormLabel>
                    <TextInput
                        as={Input}
                        id="lastName"
                        name="lastName"
                        type="lastName"
                        variant="filled"
                        validate={(value: string) => {
                          let error;
                          if (value.length < 2) {
                            error = "Skriv in ditt efternamn"
                          }
                          return error
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
                            error = "Skriv in din email"
                          }
                          return error
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
                            error = "Skriv in ditt lösenord"
                          }
                          return error
                        }}

                    />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>

                  <PrimaryButton title="Registrera dig" type="submit"/>
                </form>
            )}
          </Formik>
        </div>
        <p>Har du redan ett konto? Logga in!</p>
      </ShadowContainer>
  )
};

export default RegisterPage;