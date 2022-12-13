import { Heading, Button, Center, Flex } from "@chakra-ui/react";
import router from "next/router";
import { useEffect, useState } from "react";

type Props = {
  errorCode?: number;
  errorName?: string;
};

export default function ErrorCard(props: Props) {
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    switch (props.errorCode) {
      case 404:
        setErrorMessage("Sidan kunde inte hittas");
        break;
      case 500:
        setErrorMessage("Internt serverfel");
        break;
      default:
        setErrorMessage("Något gick fel");
        break;
    }
  }, []);

  return (
    <Center flexDirection="column" p="2rem 1rem" gap="1rem">
      <Heading as="h3">
        {props.errorCode ? props.errorCode : props.errorName} | {errorMessage}
      </Heading>
      <Button
        w="min-content"
        variant="Primary"
        onClick={() => {
          router.push("/");
        }}
      >
        Återvänd till hemsidan
      </Button>
    </Center>
  );
}
