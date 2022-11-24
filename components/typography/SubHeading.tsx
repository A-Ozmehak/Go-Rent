import React from "react";
import { Text } from "@chakra-ui/react";

//  H2 - fixed size.
// send text, color and bold/regular/thin as props

interface SubHeadingProps {
  text: string;
}

const SubHeading = (props: SubHeadingProps) => {
  return <Text fontSize="3xl">{props.text}</Text>;
};

export default SubHeading;
