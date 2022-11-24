import React from "react";
import ShadowContainer from "../components/layout/ShadowContainer";
import LoginForm from "../components/forms/LoginForm";
import { Heading } from '@chakra-ui/react'
import Paragraph from "../components/typography/Paragraph";
import PageTitle from "../components/typography/PageTitle";

const LoginPage = () => {
    const infoText = {
        width: "18rem",
        margin: "1rem 0"
    }
    const title= {
        marginTop: "1rem"
    }

    return (
        <ShadowContainer>
            <Heading sx={title}>Logga in</Heading>
            <div style={infoText}>
                <PageTitle text="För att hyra eller hyra ut hos oss, logga in eller registrera dig nedan." />
            </div>
                <LoginForm />
            <Paragraph text="Har du inget konto? Registrera dig." />
        </ShadowContainer>
    )

};

export default LoginPage;
