import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import router from "next/router";
import { useState } from "react";

const SearchField = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (search: string) => {
    const query = search;
    try {
      router.push(`/filter/${query}`);
    } catch (e) {
      return;
    }
  };

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={"text"}
        placeholder="Sök"
        onChange={(e) => setSearch(e.target.value)}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={() => handleSearch(search)}>
          {"Sök"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchField;
