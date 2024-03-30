import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiChat, BiLike, BiShare } from "react-icons/bi";

// const options = {
//   method: "POST",
//   url: "https://newsnow.p.rapidapi.com/",
//   headers: {
//     "content-type": "application/json",
//     "X-RapidAPI-Key": "9a183cd0cfmsh1e1828c3785c30fp1fd80fjsnc58e0db34d5f",
//     "X-RapidAPI-Host": "newsnow.p.rapidapi.com",
//   },
//   data: {
//     text: "business",
//     region: "wt-wt",
//     max_results: 2,
//   },
// };

// const options = {
//   method: "GET",
//   url: "https://news67.p.rapidapi.com/v2/topic-search",
//   params: {
//     languages: "en",
//     search: "business",
//   },
//   headers: {
//     "X-RapidAPI-Key": "9a183cd0cfmsh1e1828c3785c30fp1fd80fjsnc58e0db34d5f",
//     "X-RapidAPI-Host": "news67.p.rapidapi.com",
//   },
// };

// const options = {
//   method: "GET",
//   url: "https://extract-news.p.rapidapi.com/v0/article",
//   params: {
//     url: "https://www.theverge.com/2020/4/17/21224728/bill-gates-coronavirus-lies-5g-covid-19",
//   },
//   headers: {
//     "X-RapidAPI-Key": "9a183cd0cfmsh1e1828c3785c30fp1fd80fjsnc58e0db34d5f",
//     "X-RapidAPI-Host": "extract-news.p.rapidapi.com",
//   },
// };

function NewsApp() {
  const [data, setData] = useState("");
  const [loding, setLoading] = useState(false);
  async function NewsData() {
    try {
      if (data === "") {
        setLoading(true);
        // const response = await axios.request(options);

        const response = await fetch(
          `https://newsdata.io/api/1/news?apikey=pub_37257a6289b4b480f81c96fba3fdf15d11637&q=business`
        );
        const result = await response.json();
        console.log(result);
        setData(result);
        // pub_3725755a1ecd3073ebe1bc129a2d893257738
      }
    } catch (error) {
      console.error(error);
      setLoading(true);
    } finally {
      setLoading(true);
    }
  }

  useEffect(() => {
    return () => {
      NewsData();
    };
  }, []);

  return (
    <div>
      <Box p={3}>
        <HStack flexWrap={"wrap"} justifyContent={"space-evenly"}>
          {data !== "" ? (
            data &&
            data.results.map((item, i) => {
              return(
                <>
                  <Box>

                    <NewsCard description = {item.description} img={item.image_url} />

                  </Box>
                </>
              )
            })
          ) : (
            <Heading>Loding...</Heading>
          )}
        </HStack>
      </Box>
    </div>
  );
}

function NewsCard(props) {
  return (
    <Card maxW="md" h={"500px"} >
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

            <Box>
              <Heading size="sm">Segun Adebayo</Heading>
              <Text>Creator, Chakra UI</Text>
            </Box>
          </Flex>
          <IconButton
            variant="ghost"
            colorScheme="gray"
            aria-label="See menu"
            icon={<BsThreeDotsVertical />}
          />
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{props.description}</Text>
      </CardBody>
      <Image w={"100%"} h={"200px"} objectFit="cover" src={props.img} alt="Chakra UI" />

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
          Like
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
          Comment
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
          Share
        </Button>
      </CardFooter>
    </Card>
  );
}

export default NewsApp;
