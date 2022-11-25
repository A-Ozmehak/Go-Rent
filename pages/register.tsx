import React from "react";
import ShadowContainer from "../components/layout/ShadowContainer";
import SignupForm from "../components/forms/SignupForm";
import Heading from "../components/typography/Heading";
import PageTitle from "../components/typography/PageTitle";
import Paragraph from "../components/typography/Paragraph";

const RegisterPage = () => {
    return (
        <ShadowContainer>
            <Heading text="Registrera dig" />
            <PageTitle text="för att också bli en klimathjälte!"/>
            <SignupForm/>
            <Paragraph text="Har du redan ett konto? Logga in!"/>
        </ShadowContainer>
    )
};

export default RegisterPage;