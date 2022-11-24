import { propNames } from "@chakra-ui/react";
import React from "react";

//  H1 - fixed size.
// send text, color and bold/regular/thin as props

interface Props {
  text: string;
}

const Heading = (props: Props) => {
  return <h1>{props.text}</h1>;
};

export default Heading;
