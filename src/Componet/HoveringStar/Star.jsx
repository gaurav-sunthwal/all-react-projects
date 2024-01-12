import { Box, HStack, Heading, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import GoBack from "../GoBack";
function Star() {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);
  const [number, setNumber] = useState(0);

  const [star, setStar] = useState([
    1, 2, 4, 4, 5,
  ]);
  function mouseEvent(index) {
      setHover(index);
    }
    function mouseExit() {
        setHover(rating)
    }
    function handalClick(index) {
        setRating(index);
        setNumber(index)
    }
  return (
    <div>
        <VStack>
            <Heading>Star</Heading>
        </VStack>
        <Box>
            <GoBack/>
        </Box>
      <VStack h={"80vh"} justifyContent={"center"}>

        <HStack>
          {star.map((_ ,index) => {
            index = index+1
            return (
              <>
                <Heading
                  onMouseEnter={() => {
                    mouseEvent(index);
                  }}
                  onMouseLeave={() => {
                    mouseExit(index);
                  }}
                  onClick={() => handalClick(index)}
                  key={index}
                >
                 {
                    index <= (hover || rating) ? <FaStar/> : <FaRegStar/>
                 }
                </Heading>
              </>
            );
          })}
        </HStack>
        <Heading p={2}>{number}</Heading>
      </VStack>
    </div>
  );
}

export default Star;
