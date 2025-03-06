import React from "react";
import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "@/store/product";

const HomePage = () => {
  const { fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Products 🚀
        </Text>
        <Text fontSize={"2xl"} textAlign={"center"} fontWeight={"semibold"} color={"gray.500"}>
          Welcome to the product management system!
        </Text>
        <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4
        }}
        spacing={10}
        w={"full"}>

        </SimpleGrid>
        <Text fontSize={"1.5xl"} textAlign={"center"} fontWeight={"bold"} color={"gray.500"}>
        No products found 😢{" "}
						<Link to={"/create"}>
							<Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
								Create a product
							</Text>
						</Link>
					</Text>
      </VStack>
    </Container>
  );
};

export default HomePage;
