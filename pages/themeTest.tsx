import { Box, Button, IconButton } from "@chakra-ui/react";
import CarIcon from "../components/icons/categoryIcons/carIcon";
import SearchIcon from "../components/icons/searchIcon";

export default function ThemeTest() {
    return (
        <Box p="1rem">
            <h1>Go:Rent</h1>
            <h2>En klimatsatsning från Göteborgs stad, lär dig hur du kan göra skillnad.</h2>
            <h3>Monkes annonser</h3>
            <p>Test</p>
            <Button variant="Primary">Läs mer</Button>
            <Button disabled={true} variant="primaryBlocked">Förfrågad</Button>
            <Button variant="Secondary">Lägg in annons</Button>
            <Button variant="Reject">Neka</Button>
            <Button variant="Accept">Acceptera</Button>
            <Button variant="underlineBlue">Logga in!</Button>
            <IconButton variant="iconBg" aria-label='Send email' icon={<CarIcon />}></IconButton>
            <IconButton variant="iconTransparent" aria-label='Send email' icon={<SearchIcon />}></IconButton>      
        </Box>
    )
}