import {  Container } from "@chakra-ui/react";
import { CategoryDoc } from "../../utils/interface";
import { getCategories } from "../api/categories";

const CategoryPage = ({ category }: any) => {
  return (
    <Container>
      <h1>{category.name}</h1>
    </Container>
  );
};
export default CategoryPage;

export async function getStaticProps({ params }: any) {
  const category = await getCategories();

  return {
    props: { category },
  };
}
export async function getStaticPaths() {
  const categories = await getCategories();
  const paths = categories.map((category: CategoryDoc) => {
    return {
      params: {
        category: category.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
