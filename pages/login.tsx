import { Heading, Text, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";
import LoginForm from "../components/forms/LoginForm";
import ShadowContainer from "../components/layout/ShadowContainer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { useRouter } from "next/router";
const LoginPage = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);

  const infoText = {
    width: "18rem",
    margin: "1rem 0",
  };
  const title = {
    marginTop: "1rem",
  };

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
          <Heading variant="h1" sx={title}>
            Logga in
          </Heading>

          <Heading size="sm" variant="h2">
            För att hyra eller hyra ut hos oss, logga in eller registrera dig
            nedan.
          </Heading>

          <LoginForm />
          <Text>
            Har du inget konto?{" "}
            <Link className="inTextLink" href="/register">
              Registrera dig!
            </Link>
          </Text>
        </ShadowContainer>
      )}
    </>
  );
};

export default LoginPage;
