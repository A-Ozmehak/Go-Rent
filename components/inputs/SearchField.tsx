import {
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Image,
  FormControl,
  Center,
  SystemStyleObject,
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
    // console.log(filteredListings);
  };

  const searchBtnStyle: SystemStyleObject = {
    verticalAlign: "middle",
    outline: "2px solid transparent",
    outlineOffset: "2px",
    lineHeight: "1.2",
    borderRadius: "0px var(--chakra-radii-md) var(--chakra-radii-md) 0;",
    background: "#005799",
    height: "var(--chakra-sizes-10)",
    minWidth: "var(--chakra-sizes-10)",
  };

  return (
    <Center>
      <Menu>
        <FormControl
          pos="relative"
          w={{ base: "320px", sm: "480px", md: "500px" }}
        >
          <Input
            bg="white"
            pr="4.5rem"
            type={"text"}
            placeholder="Hitta det du behöver"
            value={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          />
          <MenuButton
            type="button"
            sx={searchBtnStyle}
            color="white"
            zIndex={"5"}
            right="0"
            position={"absolute"}
          >
            Sök
          </MenuButton>
        </FormControl>
        <MenuList pos="absolute" zIndex="3" right="0" top="-0.5rem">
          {filteredListings.length ? (
            filteredListings.map((f: any) => (
              <Link key={f.id} href={`/listings/${f.id}`}>
                <MenuItem w={{ base: "280px", sm: "440px", md: "460px" }}>
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
            <Text
              w={{ base: "280px", sm: "440px", md: "460px" }}
              textAlign={"center"}
            >
              Inga listningar hittades
            </Text>
          )}
        </MenuList>
      </Menu>
    </Center>
  );
};

export default SearchField;
