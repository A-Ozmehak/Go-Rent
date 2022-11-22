import { extendTheme } from "@chakra-ui/react";

export const gothenburgTheme = extendTheme({
    components: {
        Button: {
            baseStyle: {
                backgroundColor: "#006699"
            }
        }
    },
    colors: {
      brand: {
        gothenburg: "#006699",
        // ...
        900: "#1a202c",
      },
    },
})