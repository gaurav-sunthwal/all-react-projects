import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import QRCode from "qrcode.react";
import "./QRCode.css"
function QRCodeGenrater() {
  const [url, setUrl] = useState("");
  const [inputValue, setInputValue] = useState("");
  function handalSubmit(e) {
    // e.preventDefault()
    setUrl(inputValue);
  }
  return (
    <div>
      <VStack bg={"purple"}>
        
        <VStack p={2}>
          <Heading>Genrate New QR Code</Heading>
        </VStack>
        <VStack h={"90vh"} justifyContent={"center"}>
          <HStack>
            <Input
              placeholder="Enter URL"
              required
              type="url"
              w={"100%"}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button type="submit" colorScheme={"purple"} onClick={handalSubmit}>
              Genrate
            </Button>
          </HStack>
          <Box p={3} m={"auto"} display={"block"}>
            <QRCode className="QRCodeImg" value={url === "" ? "https://react-project-gaurav.vercel.app/qr-code" : url} />
          </Box>

          <Box position={"absolute"} bottom={0}>
            <Text>{url}</Text>
          </Box>
        </VStack>
      </VStack>
    </div>
  );
}

export default QRCodeGenrater;
