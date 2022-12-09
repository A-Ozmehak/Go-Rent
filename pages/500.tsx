import { Box, Button, Heading } from "@chakra-ui/react";
import router from "next/router";


export default function BadGate() {

    return (
        <Box>
            <Heading as="h3">505, something went wrong!</Heading>
            <Button
                variant="Primary"
                onClick={() => {
                    router.push("/")
                }}>
                Återvänd till hemsidan
            </Button>
        </Box>
    )
}