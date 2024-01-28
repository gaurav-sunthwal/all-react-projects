import {
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Image,
  Img,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Text,
  VStack,
} from "@chakra-ui/react";
import { TiVendorApple } from "react-icons/ti";
import { IoIosBatteryFull } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoIosSwitch } from "react-icons/io";
import "./MacStyle.css";

// img

import siri from "./Img/siri.png";
import { useEffect } from "react";

function MacClone() {
  function getCurrentDateTime() {
    return new Date().toLocaleString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  }

  return (
    <Box
      p={1}
      h={"100vh"}
      w={"100%"}
      bgImage="url('https://source.unsplash.com/1920x1280/?nature')"
      bgRepeat={"no-repeat"}
    >
      <HStack
        fontSize={20}
        bg={"#9fa5cf4f"}
        color={"white"}
        justifyContent={"space-between"}
      >
        <HStack>
          <Box cursor={"pointer"}>
            <Popover>
              <PopoverTrigger>
                <TiVendorApple />
              </PopoverTrigger>
              <Portal>
                <PopoverContent
                  border={"none"}
                  w={"250px"}
                  m={3}
                  marginTop={10}
                  
                >
                  <PopoverBody 
                    p={0}
                    m={0}
                    bg={"transparent"}
                    // textAlign={"left"}
                    // width={"20px"}
                    color={"black"}
                    w={"auto"}
                    border={"none"}
                  >
                    <Box className="ops"  w={"100%"} marginTop={3} p={4}>
                      <Heading className="opsName"    size={"sm"}>
                        About Mac
                      </Heading>
                    </Box>
                    <Divider />
                    
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </Box>

          <Box>
            <Heading size={"sm"}>Finder</Heading>
          </Box>
        </HStack>
        <Box>
          <HStack>
            <Text>100%</Text>
            <Box fontSize={"30px"}>
              <IoIosBatteryFull />
            </Box>
            <Box>
              <IoSearch />
            </Box>
            <Box>
              <IoIosSwitch />
            </Box>
            <Box>
              <Image w={"20px"} src={siri} />
            </Box>
            <Box>
              <Text>{getCurrentDateTime()}</Text>
            </Box>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
}

export default MacClone;
