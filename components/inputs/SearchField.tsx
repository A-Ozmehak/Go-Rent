import {
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Image,
  FormControl,
} from "@chakra-ui/react";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { listingInterface } from "../../utils/interface";

interface props {
  listings: listingInterface[];
}

const SearchField = ({ listings }: props) => {
  const [filteredListings, setFilteredListings] = useState<listingInterface[]>(
    []
  );
  const [search, setSearch] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(() => {
      let filterListingList = listings.filter(
        (f: any) =>
          f.title.toLowerCase().includes(e.target.value.toLowerCase()) &&
          e.target.value.length > 1
      );
      setFilteredListings(filterListingList);
      return e.target.value;
    });
    console.log(filteredListings);
  };

  return (
    <Menu>
      <FormControl>
        <Input
          pos={"relative"}
          pr="4.5rem"
          type={"text"}
          placeholder="Sök"
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <MenuButton
          zIndex={"5"}
          top={"5px"}
          right={"8px"}
          position={"absolute"}
        >
          Sök
        </MenuButton>
      </FormControl>

      <MenuList
        pos={"absolute"}
        right={{ base: "5rem", md: "25rem", lg: "40rem", xl: "53rem" }}
        zIndex={"3"}
      >
        {filterListings.length ? (
          filterListings.map((f: any) => (
            <Link key={f.id} href={`/listings/${f.id}`}>
              <MenuItem minW={"20rem"} minH="40px">
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src={f.media}
                  alt="listingImage"
                  mr="12px"
                />
                <span>{f.title}</span>
              </MenuItem>
            </Link>
          ))
        ) : (
          <Text textAlign={"center"}>Inga listningar hittades</Text>
        )}
      </MenuList>
    </Menu>
  );
};

export default SearchField;
