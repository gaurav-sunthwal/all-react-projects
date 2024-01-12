import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import homeData from "./HomeData";
import { CiLight } from "react-icons/ci";
import { useState } from "react";
function Home() {
  const [theme, setTheme] = useState(false)
  return (
    <Box>
      <Box>
        <Button fontSize={24} position={"fixed"} right={0} m={2} zIndex={6}>
          <CiLight/>
        </Button>
      </Box>
      <Box h={"auto"} >
        <HStack
          justifyContent={"space-around"}
          overflow={"auto"}
          flexWrap={"wrap"}
          p={2}
        >
          {homeData.map((item , index) => {
            return <HomeCard key={index}  titel={item.name} discripstion= {item.description} link={item.link}/>;
          })}
        </HStack>
      </Box>
    </Box>
  );
}

function HomeCard(props) {
  function randomWord(words) {
    let randomNo = Math.floor(Math.random() * words.length);
    return words[randomNo];
  }
  let words = [
    "computer",
    "software",
    "coding",
    "programming",
    "Application",
    "Code",
    "Digital",
    "Engineer",
    "business",
    "work",
    "Engineering",
  ];
  return (
    <Card  maxW="sm" m={2} w={"500px"} h={"550px"}>
      <CardBody>
        <Image
          w={"100%"}
          display={"block"}
          m={"auto"}
          src={`https://source.unsplash.com/200x200/?${randomWord(words)}`}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{props.titel}</Heading>
          <Text>{props.discripstion}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Link to={props.link}>
            <Button variant="solid" colorScheme="blue">
              Check Out
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default Home;
