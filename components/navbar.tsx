import { Flex, Spacer, Box, Center, Button, Container } from "@chakra-ui/react";

export default function Navbar() {
    return(
        <div>
            <Container maxW="1200px" p="1rem">
                <Flex>
                    <Center>
                        <Box>
                            <h1>LogoName</h1>
                        </Box>
                    </Center>
                    <Spacer />
                    <Center>
                        <Box>
                            <Button colorScheme='brand.gothenburg' variant='solid'>
                                Lägg upp annons
                            </Button>
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
        </div>
    )
}