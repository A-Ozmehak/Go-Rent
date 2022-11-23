import React from "react";
import TextInput from "../components/inputs/TextInput";
import {Formik} from "formik"
import PrimaryButton from '../components/buttons/PrimaryButton';
import ShadowContainer from "../components/layout/ShadowContainer";
import {FormControl, FormLabel, Input, FormErrorMessage} from "@chakra-ui/react";


const LoginPage = () => {
    const passwordLink = {
        textDecoration: "underline",
    }

    return (
        <ShadowContainer>
            <h1>Logga in</h1>
            <h2>För att hyra eller hyra ut hos oss, logga in eller registrera dig nedan.</h2>
            <div>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    onSubmit={(values) => {

                    }}
                >
                    {({handleSubmit, errors, touched}) => (
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
                                            error = "Skriv in en email"
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
                                            error = "Lösenordet måste vara längre än 6 karaktärer"
                                        }
                                        return error
                                    }}

                                />
                                <FormErrorMessage>{errors.password}</FormErrorMessage>
                            </FormControl>

                            <p style={passwordLink}>Glömt ditt lösenord?</p>
                            <PrimaryButton title="Logga in" type="submit"/>
                        </form>
                        )}
                        </Formik>
                        </div>
                        <p>Har du inget konto? Registrera dig.</p>
                        </ShadowContainer>
                        )
                    };

                    export default LoginPage;
