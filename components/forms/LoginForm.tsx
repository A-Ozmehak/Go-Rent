import React from "react";
import {Formik} from "formik";
import {FormControl, FormErrorMessage, FormLabel, Input} from "@chakra-ui/react";
import TextInput from "../inputs/TextInput";
import PrimaryButton from "../buttons/PrimaryButton";
import Paragraph from "../typography/Paragraph";

const LoginForm = () => {
    const btnDiv = {
        display: "flex",
        justifyContent: "center",
        marginTop: "1rem",
        marginBottom: "1rem"
    }

    return (
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

                        <Paragraph text="Glömt ditt lösenord?"/>
                        <div style={btnDiv}>
                            <PrimaryButton title="Logga in" type="submit"/>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
};

export default LoginForm;
