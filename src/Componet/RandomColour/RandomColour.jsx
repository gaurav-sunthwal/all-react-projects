import { Box, Button, HStack, Heading, VStack } from "@chakra-ui/react";
import { useState } from "react";
import GoBack from "../GoBack";

function RandomColour() {
  const [colour, setColour] = useState(0);
  const [allColour, setAllColour] = useState([]);

  function randomColour() {
    let min = 100;
    let max = 500000;
    let randomColor = Math.floor(Math.random() * (max - min) + min);
    console.log(randomColor);
    setColour(randomColor);
    setAllColour([...allColour, randomColor]);
  }
  return (
    <div>
      <Box h={"100vh"} bg={"#" + colour}>
        <VStack>
          <Heading p={2}>Genrate Random Colour</Heading>
          <GoBack />
          <HStack m={2} flexWrap={"wrap-reverse"} justifyContent={"center"}>
            <Button onClick={randomColour} m={2}>
              Genrate Random Colour
            </Button>
            <Button onClick={randomColour} m={2}>
              Genrate Hx Colour
            </Button>
            <Button onClick={randomColour} m={2}>
              Genrate RGB Colour
            </Button>
          </HStack>
          <VStack>
            <Heading>#{colour}</Heading>
          </VStack>
          <VStack >
            <HStack flexWrap={"wrap"} justifyContent={"center"}>
              {allColour.map((colour, index) => {
                return (
                  <Heading  p={2} key={index}>#{colour}</Heading>
                );
              })}
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </div>
  );
}

export default RandomColour;
