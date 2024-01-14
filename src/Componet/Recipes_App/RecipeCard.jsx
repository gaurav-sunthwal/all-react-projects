import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

function RecipeCard(props) {
  return (
    <div>
      <Card w={"300px"} h={"430px"}>
        <CardBody>
          <Image
            src={props.img}
            alt={props.title}
            borderRadius="lg"
            h={"200px"}
            w={"100%"}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{props.title}</Heading>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue" onClick={props.handalClick}>
              Add to fav
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
}

export default RecipeCard;
