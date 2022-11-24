import { Flex, Spacer, Box, Center, Button, Container } from "@chakra-ui/react";

export default function Navbar() {
    return(
        <div style={{backgroundColor: "var(--chakra-colors-brand-lightGray)"}}>
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
                            <Button variant='primary'>
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