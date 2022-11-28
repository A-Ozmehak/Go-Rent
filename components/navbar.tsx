import { Flex, Spacer, Box, Center, Button, Container } from "@chakra-ui/react";
import Link from "next/link";
import SubHeader from "./subHeader";

export default function Navbar() {
  const addButtonStyle = {
    boxShadow: "3px 3px 16px 3px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
  }

  return (
    <Box sx={{ backgroundColor: "var(--chakra-colors-brand-lightGray)" }}>
      <Container maxW="1200px" p="1rem">
        <Flex>
          <Center>
            <Box textStyle="logoText">
              <h1><Link href="/">GO:RENT</Link></h1>
            </Box>
          </Center>
          <Spacer />
          <Center>
            <Box>
              <Link href="/createListing">
                <Button sx={addButtonStyle} variant="Secondary">Lägg upp annons</Button>
              </Link>
            </Box>
          </Center>
          <Spacer />
          <Center>
            <Box>
              <Flex>
                <h1>icon</h1>
                <h1>icon</h1>
              </Flex>
            </Box>
          </Center>
        </Flex>
      </Container>
      <SubHeader />
    </Box>
  );
}
