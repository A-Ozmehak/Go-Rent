import {
    Box,
    Button,
    Center,
    Container,
    Flex,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger,
    Spacer,
    SystemStyleObject,
    Text,
    Show, Hide, Image
} from "@chakra-ui/react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { getAuth, signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { app } from "../config/firebase";
import SearchField from "./inputs/SearchField";
import SubHeader from "./subHeader";
import {userInterface} from "../utils/interface";

interface MinimalProfileCardProps {
    profile: userInterface;
}

export default function Navbar({profile}: MinimalProfileCardProps) {
    const auth = getAuth(app);
    const [user, loading] = useAuthState(auth);
    const [profileImage, seProfileImage] = useState(false)

  const [search, setSearch] = useState(false);
  const router = useRouter();
  const logOut = () => {
    signOut(auth).catch((error) => {
      console.error(error);
    });
  };

  const addButtonStyle: SystemStyleObject = {
    display: { base: "none", sm: "block" },
    boxShadow: "3px 3px 16px 3px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
  };
  const altImage = {

    marginRight: "0.5rem",
    border: "1px white solid",
    borderRadius: "20rem",
    h: 10,
    w: 10,
  }

  let removeSubHeader = false;

  if (
    router.pathname === "/profile/[profile]" ||
    router.pathname === "/createListing" ||
    router.pathname === "/login" ||
    router.pathname === "/register"
  ) {
    removeSubHeader = true;
  }

  console.log(removeSubHeader);

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
              <Popover>
                <PopoverTrigger>
                  <Flex direction="row" alignItems="center" gap={3} overflow="hidden" justifyItems="center">
                    {!profileImage ? <Text
                            sx={altImage}
                        >
                          {user?.displayName?.charAt(0)}</Text>
                        : <Image
                            objectFit="cover"
                            h={[8, 12]}
                            w={[8, 12]}
                            borderRadius="20rem"
                            src={profile?.image}
                            alt={profile?.username}
                        />
                    }
                  </Flex>

                </PopoverTrigger>
                <Hide below='md'>
                  <Text>{user?.displayName}</Text>
                </Hide>
                <PopoverContent w="min-content">
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverBody
                    display="flex"
                    gap="0.5rem"
                    flexDirection="column"
                    alignItems="center"
                    m="1rem"
                  >
                    {user && (
                      <>
                        <Button
                          onClick={() => router.push(`/profile/${user?.uid}`)}
                        >
                          Min profil
                        </Button>
                        <Button
                          onClick={() => {
                            router.push("/");
                            logOut();
                          }}
                        >
                          Logga ut
                        </Button>
                        <Button
                          sx={{ display: { sm: "none" } }}
                          onClick={() => router.push("/createListing")}
                        >
                          Lägg upp annons
                        </Button>
                      </>
                    )}
                    {!user && (
                      <>
                        <Button onClick={() => router.push("/login")}>
                          Logga in
                        </Button>
                        <Button onClick={() => router.push("/register")}>
                          Registrera dig
                        </Button>
                        <Button
                          sx={{ display: { sm: "none" } }}
                          onClick={() => router.push("/createListing")}
                        >
                          Lägg upp annons
                        </Button>
                      </>
                    )}
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
          </Center>
        </Flex>
      </Container>
      {!removeSubHeader && <SubHeader />}
    </Box>
  );
}
