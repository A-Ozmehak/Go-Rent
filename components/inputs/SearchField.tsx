import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Box,
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
  const [filterCategories, setFilterCategories] = useState<CategoryDoc[]>([]);
  const [categories, setCategories] = useState<CategoryDoc[]>([]);

  useEffect(() => {
    const getData = async () => {
      let listingsData = await getListings();
      setListings(listingsData);
      let categoriesData = await getCategories();
      setCategories(categoriesData);
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
    let filterCategoriesList = categories.filter(
      (f: any) =>
        f.name.toLowerCase().includes(search.toLowerCase()) && search.length > 1
    );
    setFilterCategories(filterCategoriesList);
    setFilterListings(filterListingList);
  }

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
        pos={"relative"}
        pr="4.5rem"
        type={"text"}
        placeholder="Sök"
        value={search}
        onChange={(e) => handleChange(e)}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={() => handleSearch(search)}>
          {"Sök"}
        </Button>
      </InputRightElement>
      <Box
        p={"1rem"}
        zIndex={"5"}
        top={"2.5rem"}
        bg={"red"}
        width={"100%"}
        position={"absolute"}
      >
        <p>Listings ({filterListings.length})</p>
        <ul>
          {filterListings.map((f: any) => (
            <Link key={f.id} href={`/listings/${f.id}`}>
              <li>{f.title}</li>
            </Link>
          ))}
        </ul>
        <p>Categories ({filterCategories.length})</p>
        <ul>
          {filterCategories.map((f: any) => (
            <Link key={f.id} href={`/category/${f.id}`}>
              <li>{f.name}</li>
            </Link>
          ))}
        </ul>
      </Box>
    </InputGroup>
  );
};

export default SearchField;
