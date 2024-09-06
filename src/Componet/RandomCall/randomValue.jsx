import { useState, useCallback } from "react";
import { Box, VStack, HStack, Badge, Button, Text, useColorModeValue, Heading, Divider, Table, Thead, Tbody, Tr, Th, Td, useColorMode, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const RandomValue = () => {
  const [manualValue, setManualValue] = useState(null);
  const [numberHistory, setNumberHistory] = useState([]);
  const [colorHistory, setColorHistory] = useState([]);
  const [sizeHistory, setSizeHistory] = useState([]);
  const [stats, setStats] = useState({
    green: 0,
    red: 0,
    small: 0,
    big: 0,
    numbers: Array(10).fill(0)
  });

  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  // const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.100");

  const generateRandomValue = useCallback(() => ({
    number: Math.floor(Math.random() * 10),
    color: Math.random() < 0.5 ? "green" : "red",
    size: Math.random() < 0.5 ? "small" : "big",
  }), []);

  const handleManualGenerate = () => {
    const newValue = generateRandomValue();
    setManualValue(newValue);
  };

  const handleSave = (type) => {
    if (manualValue) {
      switch (type) {
        case 'number':
          setNumberHistory(prev => [manualValue.number, ...prev].slice(0, 10));
          setStats(prev => ({
            ...prev,
            numbers: prev.numbers.map((count, index) => 
              index === manualValue.number ? count + 1 : count
            )
          }));
          break;
        case 'color':
          setColorHistory(prev => [manualValue.color, ...prev].slice(0, 10));
          setStats(prev => ({
            ...prev,
            [manualValue.color]: prev[manualValue.color] + 1
          }));
          break;
        case 'size':
          setSizeHistory(prev => [manualValue.size, ...prev].slice(0, 10));
          setStats(prev => ({
            ...prev,
            [manualValue.size]: prev[manualValue.size] + 1
          }));
          break;
      }
    }
  };

  return (
    <Box bg={bg} minHeight="100vh" p={4} color={textColor}>
      <VStack spacing={6} align="stretch" maxWidth="800px" margin="auto">
        <HStack justifyContent="space-between">
          <Heading>Random Value Generator</Heading>
          <IconButton
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            aria-label={`Toggle ${colorMode === "light" ? "Dark" : "Light"} Mode`}
          />
        </HStack>
        
        <Button onClick={handleManualGenerate} colorScheme="teal" size="lg">
          Generate Random Value
        </Button>

        {manualValue && (
          <HStack justifyContent="center" spacing={4}>
            <VStack>
              <Badge colorScheme="purple" fontSize="md" p={2}>Number: {manualValue.number}</Badge>
              <Button onClick={() => handleSave('number')} colorScheme="purple" size="sm">Save Number</Button>
            </VStack>
            <VStack>
              <Badge colorScheme="teal" fontSize="md" p={2}>Size: {manualValue.size}</Badge>
              <Button onClick={() => handleSave('size')} colorScheme="teal" size="sm">Save Size</Button>
            </VStack>
            <VStack>
              <Badge colorScheme={manualValue.color === "green" ? "green" : "red"} fontSize="md" p={2}>Color: {manualValue.color}</Badge>
              <Button onClick={() => handleSave('color')} colorScheme={manualValue.color === "green" ? "green" : "red"} size="sm">Save Color</Button>
            </VStack>
          </HStack>
        )}

        <Divider />

        <Box>
          <Heading size="md" mb={2}>History</Heading>
          <HStack justifyContent="space-between" alignItems="flex-start">
            <VStack align="stretch">
              <Text fontWeight="bold">Numbers</Text>
              {numberHistory.map((num, index) => (
                <Badge key={index} colorScheme="purple">{num}</Badge>
              ))}
            </VStack>
            <VStack align="stretch">
              <Text fontWeight="bold">Colors</Text>
              {colorHistory.map((color, index) => (
                <Badge key={index} colorScheme={color === "green" ? "green" : "red"}>{color}</Badge>
              ))}
            </VStack>
            <VStack align="stretch">
              <Text fontWeight="bold">Sizes</Text>
              {sizeHistory.map((size, index) => (
                <Badge key={index} colorScheme="teal">{size}</Badge>
              ))}
            </VStack>
          </HStack>
        </Box>

        <Divider />

        <Box>
          <Heading size="md" mb={2}>Statistics</Heading>
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th>Category</Th>
                <Th isNumeric>Count</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Green</Td>
                <Td isNumeric>{stats.green}</Td>
              </Tr>
              <Tr>
                <Td>Red</Td>
                <Td isNumeric>{stats.red}</Td>
              </Tr>
              <Tr>
                <Td>Small</Td>
                <Td isNumeric>{stats.small}</Td>
              </Tr>
              <Tr>
                <Td>Big</Td>
                <Td isNumeric>{stats.big}</Td>
              </Tr>
            </Tbody>
          </Table>
          <Text mt={4} fontWeight="bold">Most Common Number: {stats.numbers.indexOf(Math.max(...stats.numbers))}</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default RandomValue;