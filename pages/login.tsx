import React from "react";
import ShadowContainer from "../components/layout/ShadowContainer";
import LoginForm from "../components/forms/LoginForm";
import {Heading, Text} from '@chakra-ui/react'


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
                <Text>För att hyra eller hyra ut hos oss, logga in eller registrera dig nedan.</Text>
            </div>
                <LoginForm />
            <Text>Har du inget konto? Registrera dig.</Text>
        </ShadowContainer>
    )

};

export default LoginPage;
