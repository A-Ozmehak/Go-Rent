import ShadowContainer from "../components/layout/ShadowContainer";
import SignupForm from "../components/forms/SignupForm";
import { Heading, Text, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { useRouter } from "next/router";

const RegisterPage = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);

  return (
    <>
      {user && (
        <ShadowContainer>
          <Flex flexDirection={"column"} alignItems={"center"} gap={3}>
            <Text textAlign={"center"}>Du är redan inloggad!</Text>
            <Flex marginTop={6}>
              <Button
                onClick={() => router.push("/profile/" + user.uid)}
                variant="Primary"
              >
                Min profil
              </Button>
            </Flex>
          </Flex>
        </ShadowContainer>
      )}
      {!user && (
        <ShadowContainer>
          <Heading>Registrera dig</Heading>
          <Heading>för att också bli en klimathjälte!</Heading>
          <SignupForm />
          <Text>
            Har du redan ett konto?{" "}
            <Link className="inTextLink" href="/login">
              Logga in!
            </Link>
          </Text>
        </ShadowContainer>
      )}
    </>
  );
};

export default RegisterPage;
