import {
  Box,
  HStack,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Racipe.css";

function RecipePage() {
  const id = useParams();
  const [item, setItem] = useState();
  // console.log(id.id);
  async function RecipeData() {
    let res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id.id}`
    );
    let recipe = await res.json();
    setItem(recipe);
    console.log(recipe);
  }
  useEffect(() => {
    return () => {
      RecipeData();
    };
  }, []);

  return (
    <div>
      <NavBar />
      <Heading p={4} textAlign="center" size={"xl"}>Racipe </Heading>
      {item && (
        <>
          <HStack
            maxW={"100%"}
            flexWrap={"wrap"}
            justifyContent={"space-evenly"}
          >
            <VStack className="RecipeImg" w={"50%"}>
              <Image
                h={"500px"}
                display={"block"}
                m={"auto"}
                w={"100%"}
                p={4}
                src={item.data.recipe.image_url}
              />
            </VStack>
            <VStack textAlign={"center"}>
              <Heading>{item.data.recipe.title}</Heading>
              <Box overflow={"auto"} w={"80%"} p={2}>
                <HStack>
                  
                </HStack>
              </Box>
            </VStack>
          </HStack>
        </>
      )}
    </div>
  );
}

export default RecipePage;
