import { Heading, Button, Center } from "@chakra-ui/react"
import router from "next/router"
import { useState } from "react"

type Props = {
    errorCode?: number
    errorName?: string
}

export default function ErrorCard(props: Props) {
    const [errorMessage, setErrorMessage] = useState("")

    switch (props.errorCode) {
        case 404:
            setErrorMessage("Sidan kunde inte hittas")
            break;
        case 500:
            setErrorMessage("Internt serverfel")
            break;
        default:
            setErrorMessage("Okänt fel")
            break;
    }

    return (
        <Center>
            <Heading as="h3">{props.errorCode ? props.errorCode : props.errorName} | {errorMessage}</Heading>
            <Button
                variant="Primary"
                onClick={() => {
                    router.push("/")
                }}>
                Återvänd till hemsidan
            </Button>
        </Center>
    )
}