import React from "react";
import ShadowContainer from "../components/layout/ShadowContainer";
import SignupForm from "../components/forms/SignupForm";
import { Heading, Link, Text } from "@chakra-ui/react";

const RegisterPage = () => {
    return (
        <ShadowContainer>
            <Heading>Registrera dig</Heading>
            <Heading>för att också bli en klimathjälte!</Heading>
            <SignupForm/>
            <Text>Har du redan ett konto? <Link href="/login">Logga in!</Link></Text>
        </ShadowContainer>
    )
};

export default RegisterPage;