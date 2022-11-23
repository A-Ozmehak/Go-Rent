import { Button } from "@chakra-ui/react";
import React from "react";

// the blue buttons, register, login, readmore, submit, send and such, send title as props
type Props = {
  title: string;
  type: "submit"
}

const PrimaryButton = ({title, type}: Props) => {
  return <Button variant="primary" type={type}>{title}</Button>;
};

export default PrimaryButton;
