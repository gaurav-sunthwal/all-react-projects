import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
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
import loadingImg from "./Img/loder.gif";

function RecipesApp() {
  const [data, setData] = useState("");
  const [fav, setFav] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  async function allRecipe() {
    try {
      if (inputValue !== "") {
        setLoading(true);
        let recipe = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=${inputValue}&key=cc0f31f4-3989-4f88-af22-ce7c4016e12e`
        );
        let result = await recipe.json();
        console.log(result);
        setData(result);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false); // Set loading to false when the request is completed
    }
  }

  useEffect(() => {
    allRecipe();
  }, [inputValue]);
  function handalFav(recipe, index) {
    if (!fav.some((favRecipe) => favRecipe.id === recipe.id)) {
      // Update favorites with the new recipe
      setFav((prevFav) => [...prevFav, recipe]);
      console.log(recipe);
    }
  }
  return (
    <>
      <Box zIndex={10} w={"100%"}>
        <NavBar
          Navinputvalue={inputValue}
          Navsetinputvalue={setInputValue}
          data={fav.map((item, index) => (
            <>
              <Box p={3}>
                <Card
                  bgColor={"#1f1f1f"}
                  color={"white"}
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="outline"
                >
                  <Image
                    h={"200px"}
                    w={"100%"}
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src={item.image_url}
                    alt={item.title}
                  />

                  <Stack>
                    <CardBody>
                      <Heading size="md">{item.title}</Heading>
                    </CardBody>

                    <CardFooter>
                      <Button variant="solid" colorScheme="blue">
                        See More
                      </Button>
                    </CardFooter>
                  </Stack>
                </Card>
              </Box>
            </>
          ))}
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
          <HStack w={"80%"} className="searchInput">
            <Input
              borderRadius={50}
              placeholder="Search Item"
              value={inputValue}
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
      {loading ? (
        <VStack justifyContent={"center"} h={"60vh"} w={"100%"}>
          <Image w={"10%"} src={loadingImg} />
        </VStack>
      ) : inputValue !== "" ? (
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
                            handalClick={() => handalFav(item)}
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
                  <Image w={"10%"} src={loadingImg} />
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
              p={3}
              m={3}
            >
              <ExamplesItem
                img={amarican}
                name={"AMERICAN"}
                setInput={setInputValue}
              />
              <ExamplesItem
                img={amarican}
                name={"Indian"}
                setInput={setInputValue}
              />
              <ExamplesItem
                img={maxicon}
                name={"MEXICAN"}
                setInput={setInputValue}
              />
              <ExamplesItem
                img={
                  "http://forkify-api.herokuapp.com/images/italianpotroast2440.jpg"
                }
                name={"italian"}
                setInput={setInputValue}
              />
              <ExamplesItem
                img={
                  "https://media.istockphoto.com/id/605998748/photo/soul-food-1.jpg?s=612x612&w=0&k=20&c=FbcZayzoQCXj0x-eARB3wu-wiLQmvcVwbPV1fjo43G4="
                }
                name={"SOUTHERN & SOUL FOODFRENCH"}
                setInput={setInputValue}
              />
              <ExamplesItem
                img={
                  "https://forkify-api.herokuapp.com/images/AsianNoodleSalad1754.jpg"
                }
                name={"ASIAN"}
                setInput={setInputValue}
              />
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
      <Box
        p={5}
        onClick={() => {
          props.setInput(props.name);
        }}
      >
        <VStack
          w={"130px"}
          h={"130px"}
          borderRadius={"100%"}
          backgroundImage={props.img}
          backgroundRepeat={"none"}
          backgroundSize={"cover"}
          alignItems={"center"}
          justifyContent={"center"}
          backdropBlur={"20px"}
          style={{
            scrollbarWidth: "0px",
          }}
          transition="transform 0.3s ease-in-out"
          _hover={{
            transform: "scale(1.2)",
            cursor: "pointer",
          }}
        >
          <Box
            textAlign={"center"}
            w={"100%"}
            h={"100%"}
            alignItems={"center"}
            borderRadius={"100%"}
            backgroundColor="rgba(0, 0, 0, 0.5)"
            className="foodOps"
          >
            <VStack h={"100%"} justifyContent={"center"}>
              <Heading textTransform={"uppercase"} fontSize={"15px"}>
                {props.name}
              </Heading>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
}

export default RecipesApp;

// AMERICAN KID-FRIENDLY ITALIAN ASIAN MEXICAN SOUTHERN & SOUL FOODFRENCH
