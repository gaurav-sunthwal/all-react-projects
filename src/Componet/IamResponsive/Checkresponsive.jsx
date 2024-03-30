import { Box, Button, HStack, Heading, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";

function Checkresponsive() {
    const [link , setLink] = useState("")
  return (
    <div>
      <VStack>
        <Heading p={3} textAlign={"center"}>
          Check Responsiveness of your website
        </Heading>
        <VStack w={"100%"} textAlign={"center"} justifyContent={"center"}>
          <HStack w={"60%"} justifyContent={"center"}>
            <Input placeholder="Enter Url for your website" onChange={(e)=>setLink(e.target.value)} />
            <Button>Go!!</Button>
          </HStack>
          <Box w={"100%"}>
            <HStack  w={"100%"} overflow={"auto"}>
              <Frames
                url={link}
                width={200}
                height={500}
              />
              <Frames
                url={link}
                width={300}
                height={500}
              />
              <Frames
                url={link}
                width={400}
                height={500}
              />
              <Frames
                url={link}
                width={600}
                height={500}
              />
              <Frames
                url={link}
                width={800}
                height={500}
              />
              <Frames
                url={link}
                width={1000}
                height={600}
              />
              <Frames
                url={link}
                width={1100}
                height={700}
              />
              <Frames
                url={link}
                width={1200}
                height={800}
              />
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
