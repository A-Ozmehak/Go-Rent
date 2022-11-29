import { extendTheme} from "@chakra-ui/react";



export const Theme = extendTheme({
    styles: {
        global: (props : any) => ({
          body: {
            bg: "white",
          },
          h1: {
            fontSize: "4rem",
            fontFamily: "Bebas Neue",
            fontWeight: "bolder",
            color: "#005799"
          },
          h2: {
            color: "black",
            fontSize: '6rem',
            fontFamily: "Inter",
            fontWeight: "medium"
          },
          h3: {
            fontFamily: "Josefin Sans",
            fontWeight: 'light',
            color: "black"
          },
          h4: {
            fontFamily: "Josefin Sans",
            fontWeight: 'bold',
            fontSize: '1.1rem',
            color: "black"
          },
          p: {
            color: "black",
            fontFamily: "Inter",
          }
        }),
    },
    components: {
        Button: {
            variants: {
                "Primary": {
                  bg: "#005799",
                  fontFamily: "Inter",
                  borderRadius: ".5rem",
                  color: "white"
                },
                "primaryBlocked": {
                  bg: "#005799",
                  fontFamily: "Inter",
                  borderRadius: ".5rem",
                  color: "white"
                },
                "Secondary": {
                  bg: "white",
                  fontFamily: "Inter",
                  color: "#005799",
                  borderRadius: ".5rem"
                },
                "Reject": {
                  color: "white",
                  bg: "#BC1F1F",
                  fontFamily: "Inter",
                  borderRadius: ".5rem",
                },
                "Accept": {
                  color: "white",
                  bg: "#3FB760",
                  fontFamily: "Inter",
                  borderRadius: ".5rem",
                },
                "underlineBlue": {
                  bg: "transparent",
                  fontFamily: "Inter",
                  textDecoration: "underline",
                  textDecorationColor: "#005799",
                  color: "#005799"
                },
                "iconBg": {
                  bg: "#005799",
                  borderRadius: "50%",
                  color: "white"
                },
                "iconTransparent": {
                  bg: "transparent",
                  color: "#005799"
                }
            }
        },
        Box: {
            variants: {
                "artistBox": {
                    boxShadow: "7px 0px 0px 0px #D2AC47",
                },
                "heroBox": {
                    clipPath: "polygon(100% 21%, 100% 100%, 0 100%, 0 0)",
                    backgroundColor: "red"
                }
            }
        }
    }
})
// Josefin Sans (bold, semi bold, regular), Inter (extra bold, bold, semi bold, regular, thin),

