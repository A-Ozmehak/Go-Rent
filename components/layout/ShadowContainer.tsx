import { Box } from "@chakra-ui/layout";

interface ShadowContainerProps {
  children?: React.ReactNode;
}

// Container around the forms

const ShadowContainer = ({ children }: ShadowContainerProps) => {
  const shadowContainer = {
    boxShadow: "3px 3px 16px 3px rgba(0,0,0,0.21)",
    border: "1px solid #E7E7E7",
    width: "23rem",
    height: "40rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
  };
  return <Box style={shadowContainer as React.CSSProperties}>{children}</Box>;
};

export default ShadowContainer;
