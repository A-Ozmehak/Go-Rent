import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Image,
  FormControl,
} from "@chakra-ui/react";
import Link from "next/link";
import router from "next/router";
import { useEffect, useState } from "react";
import { getCategories } from "../../pages/api/categories";
import { getListings } from "../../pages/api/listings";
import { CategoryDoc, listingInterface } from "../../utils/interface";

const SearchField = () => {
  const [listings, setListings] = useState([]);
  const [filterListings, setFilterListings] = useState<String[]>([]);

  useEffect(() => {
    const getData = async () => {
      let listingsData = await getListings();
      setListings(listingsData);
    };
    getData();
  }, []);

  const [search, setSearch] = useState("");

  function handleChange(e: any) {
    setSearch(e.target.value);
    let filterListingList = listings.filter(
      (f: any) =>
        f.title.toLowerCase().includes(search.toLowerCase()) &&
        search.length > 1
    );
    setFilterListings(filterListingList);
    console.log(filterListings);
  }

  // const handleSearch = (search: string) => {
  //   const query = search;
  //   try {
  //     router.push(`/filter/${query}`);
  //   } catch (e) {
  //     return;
  //   }
  // };

  return (
    <Menu>
      <FormControl>
        <Input
          pos={"relative"}
          pr="4.5rem"
          type={"text"}
          placeholder="Sök"
          value={search}
          onChange={(e) => handleChange(e)}
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

      <MenuList pos={"absolute"} right={{base: "5rem", md: "25rem", lg: "40rem", xl: "53rem"}} zIndex={"3"}>
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
