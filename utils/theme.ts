import { extendTheme, theme as defaultTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
        heading: "'Josefin Sans', sans-serif",
        body: "Inter",
    },
    textStyles: {
        logoText: {
            fontSize: "2rem",
            color: "#006699",
            fontWeight: "900"
        },
        header: {
            fontSize: "35px",
            fontWeight: "600",
            textAlign: "center"
        },
        subHeader: {
            fontSize: "1.4rem",
            fontWeight: "700"
        }
    },
    components: {
        Button: {
            baseStyle: {
                backgroundColor: "red"
            },
            variants: {
                "primary": {
                    backgroundColor: "#006699",
                    color: "#FFFFFF"
                },
                "secondary": {
                    backgroundColor: "#929AAB",
                    color: "#FFFFFF"
                },
                "accept": {
                    backgroundColor: "#3FB760",
                    color: "#FFFFFF"
                },
                "deny": {
                    backgroundColor: "#BC1F1F",
                    color: "#FFFFFF"
                }
            }
        }
    },
    colors: {
        brand: {
            gothenburg: "#006699",
            lightGray: "#EEEEEE",
            black: "#000000",
            success: "#3FB760",
            error: "#BC1F1F",
        },
    },
})


// Josefin Sans (bold, semi bold, regular), Inter (extra bold, bold, semi bold, regular, thin), 