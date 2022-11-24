import React from "react";
import { DownloadIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/react";

type UploadButtonProps = {
    title: string;
  }


const UploadButton = ({title}: UploadButtonProps) => {
  return (
    <Button>
      <DownloadIcon />
      <Text>{title}</Text>
    </Button>
  );
};

export default UploadButton;
