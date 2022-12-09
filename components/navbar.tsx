import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Menu,
  MenuItem,
  Spacer,
  SystemStyleObject,
  Text,
  Hide,
  Wrap,
  WrapItem,
  Avatar,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import SearchIcon from "@mui/icons-material/Search";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { app, auth } from "../config/firebase";
import SubHeader from "./subHeader";
import { userInterface } from "../utils/interface";

export interface props {
  profile: userInterface;
}

export default function Navbar({ profile }: props) {
  const [user] = useAuthState(auth);
  const loggedInUser = user?.uid;

  const router = useRouter();

  const logOut = () => {
    if (loggedInUser) {
      signOut(auth).catch((error) => {
        console.error(error);
      });
    }
  };

  const [scrollHeight, setScrollHeight] = useState(1);

  useEffect(() => {
    if (window !== undefined) {
      window.onscroll = () => {
        const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
        if (newScrollHeight > 50) {
          setScrollHeight(0);
        } else {
          setScrollHeight(1);
        }
        console.log(scrollHeight);
      };
    }
  });

  let removeSubHeader = false;

  if (
    router.pathname === "/profile/[profile]" ||
    router.pathname === "/createListing" ||
    router.pathname === "/login" ||
    router.pathname === "/register"
  ) {
    removeSubHeader = true;
  }

  return (
    <Box sx={{ backgroundColor: "var(--chakra-colors-brand-lightGray)" }}>
      <Container maxW="1200px" maxH="80px">
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
              <Button
                onClick={() => router.push("/createListing")}
                sx={addButtonStyle}
                variant="Secondary"
              >
                Lägg upp annons
              </Button>
            </Box>
          </Center>
          <Spacer />
          <Center>
            <Flex>
              <Link href={"/listings"}>
                <SearchIcon
                  sx={{
                    marginRight: "1rem",
                    fontSize: "2rem",
                    cursor: "pointer",
                    color: "#005799",
                  }}
                />
              </Link>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  <Wrap>
                    <WrapItem>
                      <Avatar
                        size="sm"
                        name={profile.firstName}
                        src={profile.image}
                      />
                      <Hide below="md">
                        <Text
                          sx={{ marginLeft: "0.5rem", marginTop: "0.5rem" }}
                        >
                          {user?.displayName}
                        </Text>
                      </Hide>
                    </WrapItem>
                  </Wrap>
                </MenuButton>
                <MenuList zIndex="4">
                  {!!loggedInUser && (
                    <>
                      <MenuItem
                        onClick={() => router.push(`/profile/${user?.uid}`)}
                      >
                        Min profil
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          router.push("/");
                          logOut();
                        }}
                      >
                        Logga ut
                      </MenuItem>
                    </>
                  )}
                  {!loggedInUser && (
                    <>
                      <MenuItem onClick={() => router.push("/login")}>
                        Logga in
                      </MenuItem>
                      <MenuItem onClick={() => router.push("/register")}>
                        Registrera dig
                      </MenuItem>
                    </>
                  )}
                </MenuList>
              </Menu>
              <Button
                sx={{ display: { sm: "none" } }}
                onClick={() => router.push("/createListing")}
              >
                Lägg upp annons
              </Button>
            </Flex>
          </Center>
        </Flex>
      </Container>
      {!removeSubHeader && <SubHeader />}
    </Box>
  );
}

const addButtonStyle: SystemStyleObject = {
  display: { base: "none", sm: "block" },
  boxShadow: "3px 3px 16px 3px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
};
