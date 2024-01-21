import {
  Box,
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
import { Link } from "react-router-dom";

function RecipeCard(props) {
  return (
    <div>
      <Card w={"300px"} h={"auto"}>
        <CardBody>
          <Image
            display={"block"}
            m={"auto"}
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
            <Link to={`/recipeApp/${props.id}`}>
              <Button
                variant="solid"
                colorScheme="blue"
                onClick={props.handalSeeMore}
              >
                Buy now
              </Button>
            </Link>
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={props.handalClick}
            >
              Add to Fav
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
}

export default RecipeCard;
