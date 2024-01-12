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
  Input,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import "./LodeProduct.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GoBack from "../GoBack.jsx";
import { FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Products() {
  const [product, setProduct] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [allCategories, setAllCategories] = useState();
  const [searchProduct, setSearchProduct] = useState([]);
  const [search, setSearch] = useState(null);
  async function fatchProduct() {
    try {
      const responce = await fetch(`https://dummyjson.com/products`);
      let result = await responce.json();
      console.log(result);

      setProduct(result.products);
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchCategory() {
    const category = await fetch("https://dummyjson.com/products/categories");
    const allCategories = await category.json();
    setCategorys(allCategories);
  }
  async function fetchSearch() {
    const category = await fetch(
      "https://dummyjson.com/products/search?q=" + { search }
    );
    const allCategories = await category.json();
    setSearchProduct(allCategories);
  }
  useEffect(() => {
    fatchProduct();
    fetchCategory();
    fetchSearch();
  }, []);
  function handalSelect(e) {
    setAllCategories(e.target.value);
    alert(allCategories);
  }
  function handalSelectInput(e) {
    setSearch(e.target.value);
  }
  return (
    <div>
      <nav>
        <HStack
          bg={"#171717"}
          justifyContent={"space-between"}
          p={2}
          zIndex={3}
          w={"100%"}
          position={"fixed"}
        >
          <Box>
            <Link to={"/"}>
              <Heading>Products</Heading>
            </Link>
          </Box>
          <Box>
            <HStack>
              <Input
                placeholder="Scearch Products"
                value={search}
                onChange={() => handalSelectInput}
              />
              <Button colorScheme="purple">Scearch</Button>
            </HStack>
          </Box>
          <Box>
            <HStack fontSize={20}>
              <FaBagShopping />
            </HStack>
          </Box>
        </HStack>
      </nav>

      <Box>
        <HStack flexWrap={"wrap"} justifyContent={"space-evenly"}>
          {search === null ? (
            product.map((product, index) => {
              return (
                <ProductCard
                  key={product.category}
                  Img={product.images.map((item, index) => {
                    return (
                      <Box key={index}>
                        <Image
                          src={item}
                          alt="Green double couch with wooden legs"
                          borderRadius="lg"
                        />
                      </Box>
                    );
                  })}
                  title={product.title}
                  description={product.description}
                  price={"$" + product.price}
                />
              );
            })
          ) : (
            <Heading>{search}</Heading>
          )}
        </HStack>
      </Box>
    </div>
  );
}

function ProductCard(props) {
  const [hover, setHover] = useState(false);
  return (
    <Card
      maxW="sm"
      marginTop={20}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <CardBody>
        <Carousel
          className="images"
          autoPlay={hover}
          showStatus={false}
          infiniteLoop
          interval={900}
        >
          {props.Img}
        </Carousel>

        <Stack mt="6" spacing="3">
          <Heading size="md">{props.title}</Heading>
          <Text>{props.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            {props.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

// {
//
// brand
// :
// "Apple"
// category
// :
// "smartphones"
// description
// :
// "An apple mobile which is nothing like apple"
// discountPercentage
// :
// 12.96
// id
// :
// 1
// images
// :
// Array(5)
// 0
// :
// "https://cdn.dummyjson.com/product-images/1/1.jpg"
// 1
// :
// "https://cdn.dummyjson.com/product-images/1/2.jpg"
// 2
// :
// "https://cdn.dummyjson.com/product-images/1/3.jpg"
// 3
// :
// "https://cdn.dummyjson.com/product-images/1/4.jpg"
// 4
// :
// "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
// length
// :
// 5
// [[Prototype]]
// :
// Array(0)
// price
// :
// 549
// rating
// :
// 4.69
// stock
// :
// 94
// thumbnail
// :
// "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
// title
// :
// "iPhone 9"
// }
export default Products;
