import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";

function Checkresponsive() {
  const [link, setLink] = useState("");
  const [isGreatherThen] = useMediaQuery("(min-width: 800px)");
  return (
    <div>
      <VStack>
        <Heading p={3} textAlign={"center"}>
          Check Responsiveness of your website
        </Heading>
        <VStack w={"100%"} textAlign={"center"} justifyContent={"center"}>
          <HStack w={isGreatherThen ? "60%" : "80%"} justifyContent={"center"}>
            <Input
              placeholder="Enter Url for your website"
              onChange={(e) => setLink(e.target.value)}
            />
            <Button>Go!!</Button>
          </HStack>
          <Box w={"100%"}>
            <HStack w={"100%"} overflow={"auto"}>
              <Frames url={link} width={200} height={1000} />
              <Frames url={link} width={300} height={1000} />
              <Frames url={link} width={400} height={1000} />
              <Frames url={link} width={600} height={1000} />
              <Frames url={link} width={800} height={1000} />
              <Frames url={link} width={1000} height={1000} />
              <Frames url={link} width={1100} height={1000} />
              <Frames url={link} width={1200} height={1000} />
            </HStack>
          </Box>
        </VStack>
      </VStack>
    </div>
  );
}

function Frames({ url, width, height }) {
  return (
    <>
      <Box p={2}>
        <iframe src={url} width={width} height={height}></iframe>
      </Box>
    </>
  );
}

export default Checkresponsive;
