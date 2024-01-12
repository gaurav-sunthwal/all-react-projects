import {
  Box,
  Button,
  Card,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import data from "./WrapperObject";
import { useState } from "react";
import GoBack from "../GoBack";

function Wrapper() {
  const [answerId, setAnswerId] = useState(null);
  const [open, setOpen] = useState(false);
  function handalClick(item) {
    setAnswerId(item === answerId ? "null" : item);
  }
  function openAll() {
    setOpen(open === false ? true : false);
  }

  return (
    <div>
      <Box>
        <VStack>
          <Heading p={2}>Wrapper</Heading>
          <GoBack/>
          <VStack
            m={2}
            p={2}
            h={"80vh"}
            justifyContent={"normal"}
            overflow={"auto"}
          >
            <Box>
              {data && data.length > 0 ? (
                data.map((item) => {
                  return (
                    <>
                      <Box w={"100%"} p={2}>
                        <Card p={2}>
                          <HStack justifyContent={"space-between"}>
                            <Heading size={"43px"}>{item.question}</Heading>
                            <Heading
                              cursor={"pointer"}
                              onClick={() => handalClick(item.id)}
                            >
                              {open === true || answerId === item.id
                                ? "-"
                                : "+"}
                            </Heading>
                          </HStack>
                          <VStack>
                            <Box>
                              {answerId === item.id ? (
                                <Text>{item.answer}</Text>
                              ) : "" || open === true ? (
                                <Text>{item.answer}</Text>
                              ) : (
                                ""
                              )}
                            </Box>
                          </VStack>
                        </Card>
                      </Box>
                    </>
                  );
                })
              ) : (
                <Text>No Data Present </Text>
              )}
            </Box>
          </VStack>
          <Button m={2} colorScheme="purple" onClick={openAll}>
            {open === false ? <Text>Open All</Text> : <Text>Close All</Text>}
          </Button>
        </VStack>
      </Box>
    </div>
  );
}

export default Wrapper;
