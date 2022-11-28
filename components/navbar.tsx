import {
  Flex,
  Spacer,
  Box,
  Center,
  Button,
  Container,
  Popover,
  PopoverTrigger,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverContent,
  PopoverArrow,
  Text,
  PopoverFooter,
} from "@chakra-ui/react";
import Link from "next/link";
import SubHeader from "./subHeader";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

export default function Navbar() {
  const auth = getAuth(app);
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // alert("Sign out successful!");
        router.push("/login");
      })
      .catch((error) => {
        // An error happened.
        alert("An error has occurred please try again.");
      });
  };

  const addButtonStyle = {
    boxShadow: "3px 3px 16px 3px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
  };

  return (
    <Box sx={{ backgroundColor: "var(--chakra-colors-brand-lightGray)" }}>
      <Container maxW="1200px" p="1rem">
        <Flex>
          <Center>
            <Box textStyle="logoText">
              <h1>
                <Link href="/">GO:RENT</Link>
              </h1>
            </Box>
          </Center>
          <Spacer />
          <Center>
            <Box>
              <Link href="/createListing">
                <Button sx={addButtonStyle} variant="Secondary">
                  Lägg upp annons
                </Button>
              </Link>
            </Box>
          </Center>
          <Spacer />
          <Center>
            <Box>
              <Flex>
                <Box color="#005799">
                  <SearchIcon
                    style={{
                      marginRight: "1rem",
                      fontSize: "2rem",
                      cursor: "pointer",
                    }}
                  ></SearchIcon>
                  <Popover>
                    <PopoverTrigger>
                      <AccountCircleIcon
                        style={{ fontSize: "2rem", cursor: "pointer" }}
                      ></AccountCircleIcon>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverBody
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                      >
                        {user && (
                          <>
                            <Link href="/profile">
                              <Text>Min profil</Text>
                            </Link>
                            <Link href="/profile">
                              <Text onClick={logOut}>Logga ut</Text>
                            </Link>
                          </>
                        )}
                        {!user && (
                          <>
                            <Link href="/login">
                              <Text>Logga in</Text>
                            </Link>
                            <Link href="/register">
                              <Text>Registrera dig</Text>
                            </Link>
                          </>
                        )}
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Box>
              </Flex>
            </Box>
          </Center>
        </Flex>
      </Container>
      <SubHeader />
    </Box>
  );
}
