import React from "react";
import ShadowContainer from "../components/layout/ShadowContainer";
import SignupForm from "../components/forms/SignupForm";
import {Heading, Text} from '@chakra-ui/react'

const RegisterPage = () => {
    return (
        <ShadowContainer>
            <Heading>Registrera dig</Heading>
            <Text>för att också bli en klimathjälte!</Text>
            <SignupForm/>
            <Text>Har du redan ett konto? Logga in!</Text>
        </ShadowContainer>
    )
};

export default RegisterPage;