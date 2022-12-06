import { DownloadIcon } from "@chakra-ui/icons";
import { Flex, InputGroup, InputRightElement } from "@chakra-ui/react";
import FilePicker from "chakra-ui-file-picker";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { storage } from "../../config/firebase";

export interface MediaProps {
  id: string;
  updateField: (field: string, value: any, shouldValidate?: boolean) => void;
  value: string;
}

const UploadMedia = ({ id, value, updateField }: MediaProps) => {
  const [imageFile, setImageFile] = useState<File>();
  const [downloadURL, setDownloadURL] = useState("");

  const handleSelectedFile = async (files: any) => {
    if (files.length) {
      setImageFile(files[0]);
      await handleUploadFile(files[0]);
    } else {
      console.error("File size to large");
    }
  };

  const handleUploadFile = async (imageFile: any) => {
    if (imageFile) {
      const name = imageFile.name;
      const storageRef = ref(storage, `image/${name}`);
      const uploadSnapshot = await uploadBytesResumable(storageRef, imageFile);

      const url = await getDownloadURL(uploadSnapshot.ref);
      setDownloadURL(url);

      updateField("media", url, false);
    } else {
      console.error("File not found");
    }
  };

  return (
    <Flex>
      <InputGroup>
        <InputRightElement>
          <DownloadIcon />
        </InputRightElement>
        <FilePicker
          placeholder={"Lägg till bild"}
          onFileChange={(files) => handleSelectedFile(files)}
          hideClearButton={true}
        />
      </InputGroup>
      <input type="hidden" id={id} value={value} />
    </Flex>
  );
};

export default UploadMedia;
