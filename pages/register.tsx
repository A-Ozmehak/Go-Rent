import React from "react";
import ShadowContainer from "../components/layout/ShadowContainer";
import SignupForm from "../components/forms/SignupForm";
import { Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const RegisterPage = () => {
    return (
        <ShadowContainer>
            <Heading>Registrera dig</Heading>
            <Heading>för att också bli en klimathjälte!</Heading>
            <SignupForm />
            <Text>Har du redan ett konto? <Link className='inTextLink' href="/login">Logga in!</Link></Text>
        </ShadowContainer>
    )
};

export default RegisterPage;