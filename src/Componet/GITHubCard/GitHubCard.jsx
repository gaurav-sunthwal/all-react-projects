import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Card,
  HStack,
  Heading,
  Image,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GoBack from "../GoBack";
import data from "../Wrapper/WrapperObject";
// require('dotenv').config();

// let auth = "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";

// let auth = process.env.GITHUB_CARD;
let auth = import.meta.env.VITE_GITHUB_CARD;
function GitHubCard() {
  const [inputValue, setInputValue] = useState("");
  const [useName, setUserName] = useState("gaurav-sunthwal");
  const [data, setData] = useState(null);

  async function GitHubCardData() {
    try {
      let GitHubData = await fetch(`https://api.github.com/users/${useName}`, {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      });
      let result = await GitHubData.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
      console.log("Response status code:", error.response?.status);
      console.log("Response message:", error.response?.message);
    }
  }

  useEffect(() => {
    GitHubCardData();
    // followingData();
  }, [useName]);



  function handleClick(e) {
    e.preventDefault();
    setUserName(inputValue);
  }

  return (
    <div className="gitHubCard">
      <Box>
        <GoBack />
      </Box>
      <Box p={5}>
        <Card bg={"#1f1f1f"} color={"white"}>
          <Box marginTop={13} p={3}>
            <VStack w={"100%"}>
              <form style={{
                width: "60%",
              }}>
                <HStack>
                  <Input
                    type="text"
                    placeholder="Search UseName!!"
                    value={inputValue}
                    autoFocus
                    onChange={(e) => {
                      setInputValue(e.target.value);
                    }}
                    w={"100%"}
                  />
                  <Button type="submit" onClick={handleClick}>
                    Search
                  </Button>
                </HStack>
              </form>
            </VStack>
          </Box>
          {useName !== null ? (
            data && (
              <>
                <Box p={2}>
                  <VStack>
                    <Image
                      className="gitImg"
                      w={"25%"}
                      borderRadius={"50%"}
                      src={data.avatar_url}
                    />
                    <Box textAlign={"center"}>
                      <HStack justifyContent={"center"}>
                        <Link to={data.html_url}>
                          <Heading>{data.name}</Heading>
                        </Link>

                        {data.twitter_username !== null ? (
                          <Link
                            to={`https://twitter.com/${data.twitter_username}`}
                          >
                            <Text>@{data.twitter_username}</Text>
                          </Link>
                        ) : null}
                      </HStack>
                      <Text textAlign={"center"}>{data.company}</Text>
                      <Text>{data.bio}</Text>
                      <Box>
                        <Text>{data.email}</Text>
                      </Box>
                      <HStack justifyContent={"center"} m={2}>
                        <GetInfoCard
                          userName={useName}
                          data={"followers"}
                          number={data.followers}
                          infoName={"Followers"}
                        />
                        <GetInfoCard
                          userName={useName}
                          data={"following"}
                          number={data.following}
                          infoName={"Following"}
                        />
                        <GetInfoCard
                          userName={useName}
                          data={"repos"}
                          number={data.public_repos}
                          infoName={"Public Repos"}
                        />
                      </HStack>
                    </Box>
                  </VStack>
                </Box>
              </>
            )
          ) : (
            <VStack h={"70vh"} justifyContent={"center"}>
              <Heading>Search For User !!</Heading>
            </VStack>
          )}
        </Card>
      </Box>
    </div>
  );
}

function GetInfoCard(props) {
  const [infoData, setSetInfoData] = useState("followers");
  const [userName, setUserName] = useState(null);
  const [followers, setFollowers] = useState([]);
  async function getInfo() {
    let url = "";
    if (userName === null) {
      url = `https://api.github.com/users/${props.userName}/${props.data}`;
    } else {
      url = `https://api.github.com/users/${userName}/${props.data}`;
    }
    try {
      // console.log("here", auth);
      let followerData = await fetch(url, {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      });
      let followerresult = await followerData.json();
      console.log(followerresult);
      setFollowers(followerresult);
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
    }
  }
  useEffect(() => {
    getInfo();
  }, [props.userName, props.data, userName]);

  function showUser(item) {
    setUserName(item.login);
    // alert(item.login)
  }
  return (
    <Box>
      <Popover>
        <PopoverTrigger>
          <Button colorScheme="blue">
            {props.infoName} : {props.number}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader color={"black"}>{`Follow! >30 `}</PopoverHeader>
          <PopoverBody color={"black"} overflow={"auto"} height={props.data !== "repos" ?   "30vh" : "60vh"}>
            {followers.map((item) => {
              return props.data !== "repos" ? (
                <HStack
                  key={item.name}
                  overflow={"auto"}
                  m={2}
                  cursor={"pointer"}
                  onClick={() => showUser(item)}
                >
                  <Image borderRadius={"50%"} w={10} src={item.avatar_url} />
                  <Text>{item.login}</Text>
                </HStack>
              ) : (
                <HStack w={"100%"}>
                  <Accordion defaultIndex={[0]} allowMultiple w={"100%"}>
                    <AccordionItem w={"100%"}>
                      <h2>
                        <AccordionButton w={"100%"}>
                          <Box as="span" flex="1" textAlign="left">
                            {item.name}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Box textAlign={"start"}>
                          <Link to={item.html_url}>
                            <Text>{item.full_name}</Text>
                          </Link>
                          <Text>Open Issues: {item.open_issues}</Text>
                          <Text>visibility: {item.visibility}</Text>
                        </Box>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </HStack>
              );
            })}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
}
export default GitHubCard;
