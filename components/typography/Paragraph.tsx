import React from "react";

//  p  - fixed size.
// send text, color and bold/regular/thin as props
interface Props {
  text: string;
}

const Paragraph = (props: Props) => {
  return <p>{props.text}</p>
};

export default Paragraph;
