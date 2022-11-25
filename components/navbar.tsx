import { Flex, Spacer, Box, Center, Button, Container } from "@chakra-ui/react";
import Link from "next/link";
import UserStatusButton from "./buttons/UserStatusButton";

export default function Navbar() {
  return (
    <div style={{ backgroundColor: "var(--chakra-colors-brand-lightGray)" }}>
      <Container maxW="1200px" p="1rem">
        <Flex>
          <Center>
            <Box textStyle="logoText">
              <h1>GO:RENT</h1>
            </Box>
          </Center>
          <Spacer />
          <Center>
            <Box>
              <Link href="/createListing">
                <Button variant="primary">Lägg upp annons</Button>
              </Link>
            </Box>
          </Center>
          <Spacer />
          <Center>
            <Box>
              <Flex>
                <h1>icon</h1>
                <h1>icon</h1>
                <UserStatusButton />
              </Flex>
            </Box>
          </Center>
        </Flex>
      </Container>
    </div>
  );
}
