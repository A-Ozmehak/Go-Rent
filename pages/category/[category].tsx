
import { Container } from "@chakra-ui/react";
import { getCategory } from "../api/categories";

const CategoryPage = ({ category }: any) => {
  return (
    <Container>
      <h1>{category.name}</h1>
    </Container>
  );
};
export default CategoryPage;

export async function getServerSideProps({ params }: any) {
  const category = await getCategory(params.category);

  return {
    props: { category },
  };
}
