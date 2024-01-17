import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import "./Racipe.css";

import { FaSearch } from "react-icons/fa";
// imgs

import amarican from "./Img/amarican.jpg";
import indian from "./Img/indian.jpg";
import maxicon from "./Img/maxicon.jpg";

function RecipesApp() {
  const [data, setData] = useState("");
  const [fav, setFav] = useState([1, 2, 34, 4]);
  const [inputValue, setInputValue] = useState("");
  async function allRecipe() {
    try {
      if (inputValue !== "") {
        let recipe = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=${inputValue}&key=cc0f31f4-3989-4f88-af22-ce7c4016e12e`
        );
        let result = await recipe.json();
        console.log(result);
        setData(result);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    allRecipe();
  }, [inputValue]);
  function handalFav(item, index) {
    // alert(item.title)
    console.log(index);
  }
  return (
    <>
      <Box zIndex={10} w={"100%"}>
        <NavBar
          Navinputvalue={inputValue}
          Navsetinputvalue={setInputValue}
          data={fav.map((item) => {
            return <h1>{item}</h1>;
          })}
        />
      </Box>
      <VStack w={"100%"}>
        <VStack
          justifyContent={"center"}
          w={"100%"}
          p={3}
          css={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
          }}
        >
          <HStack w={"80%"}>
            <Input
              borderRadius={50}
              placeholder="Search Item"
              value={inputValue}
              className="searchInput"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <Button borderRadius={"100%"} w={"45px"} fontSize={"50px"}>
              <FaSearch />
            </Button>
          </HStack>
        </VStack>
      </VStack>
      {inputValue !== "" ? (
        <Box>
          {data &&
            (data.data.recipes.length !== 0 ? (
              <>
                <HStack p={2} justifyContent={"space-evenly"} flexWrap={"wrap"}>
                  {data.data.recipes.map((item, index) => {
                    return (
                      <Box m={2} key={item.publisher}>
                        {
                          <RecipeCard
                            img={item.image_url}
                            title={item.title}
                            handalClick={() => handalFav()}
                          />
                        }
                      </Box>
                    );
                  })}
                </HStack>
              </>
            ) : (
              <>
                <VStack justifyContent={"center"} h={"60vh"} w={"100%"}>
                  <Heading p={2} textAlign={"certer"}>
                    {`Not Found!!......Search For your Fav Food like
                    "Pizza","Burger"`}
                  </Heading>
                </VStack>
              </>
            ))}
        </Box>
      ) : (
        <>
          <VStack justifyContent={"center"} h={"60vh"}>
            <Text>PERSONALIZE YOUR EXPERIENCE</Text>
            <Heading textAlign={"center"}>
              What are your favorite cuisines?
            </Heading>
            <HStack
              w={"100%"}
              overflow={"auto"}
              className="RacipeItem"
              justifyContent={"center"}
              p={2}
            >
              <ExamplesItem img={amarican} name={"AMERICAN"} />
              <ExamplesItem img={indian} name={"Indian"} />
              <ExamplesItem img={maxicon} name={"AMERICAN"} />
              <ExamplesItem img={amarican} name={"AMERICAN"} />
              <ExamplesItem img={amarican} name={"AMERICAN"} />
            </HStack>
          </VStack>
        </>
      )}
    </>
  );
}

function ExamplesItem(props) {
  return (
    <>
      <Box p={1}>
        <VStack
          w={"150px"}
          h={"150px"}
          borderRadius={"100%"}
          backgroundImage={props.img}
          backgroundRepeat={"none"}
          backgroundSize={"cover"}
          alignItems={"center"}
          justifyContent={"center"}
          backdropBlur={"20px"}
        >
          <Heading fontSize={"15px"}>{props.name}</Heading>
        </VStack>
      </Box>
    </>
  );
}

export default RecipesApp;

// AMERICAN KID-FRIENDLY ITALIAN ASIAN MEXICAN SOUTHERN & SOUL FOODFRENCH
