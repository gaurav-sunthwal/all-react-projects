import {
  Box,
  Button,
  Card,
  HStack,
  Heading,
  Image,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import sunny from "./Img/sunny.png";
import rain from "./Img/rain.png";
import Clouds from "./Img/Clouds.png";

import { WiHumidity } from "react-icons/wi";
import { GiWindsock } from "react-icons/gi";
import "./Style.css";
// import CityForm from "./CityForm";

function WeartherApp() {
  const [inputValue, setinputValue] = useState("");
  const [temp, setTemp] = useState("C");
  const [data, setData] = useState("");
  async function weatherData(city) {
    try {
      let res = await fetch(
        ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=26f89ecd5b48cb7485150b10130a7b88`
      );

      let result = await res.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handalClick(e) {
    e.preventDefault();
    weatherData(inputValue);
  }
  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
  useEffect(() => {
    weatherData("pune");
  }, []);
  return (
    <div>
      <Box>
        <VStack>
          <Heading>Wearther App</Heading>

          <Card className="card" p={4} w={"50%"} bg={"#1f1f1f"} color={"white"}>
            <form>
              <HStack>
                <Input
                  type="text"
                  placeholder="Search City!!"
                  value={inputValue}
                  autoFocus
                  onChange={(e) => {
                    setinputValue(e.target.value);
                  }}
                />
                <Button type="submit" onClick={handalClick}>
                  Search
                </Button>
              </HStack>
            </form>
            {
              data.cod !== "404" ?
              <VStack>
                {data && (
                  <Box>
                    <Text position={"absolute"} right={0} p={3}>
                      {getCurrentDate()}
                    </Text>
                    <VStack>
                      <Image
                        m={"auto"}
                        p={4}
                        display={"block"}
                        w={"300px"}
                        src={
                          data.weather[0].main === "Rain"
                            ? rain
                            : data.weather[0].main === "Clouds"
                            ? Clouds
                            : data.weather[0].main === "Clear"
                            ? sunny
                            : Clouds
                        }
                      />
                      <HStack>
                        <Heading m={3}>
                          {temp === "C"
                            ? Math.floor(data.main.temp - 273.15) + " °C"
                            : (Math.floor(data.main.temp - 273.15) * 9) / 5 +
                              32 +
                              " °F"}
                        </Heading>

                        <Select
                          w={"20%"}
                          m={"auto"}
                          display={"block"}
                          value={temp}
                          onChange={(e) => {
                            setTemp(e.target.value);
                          }}
                        >
                          <option value="C">°C</option>
                          <option value="F">°F</option>
                        </Select>
                      </HStack>
                      <Text>{data.weather[0].description}</Text>
                      <Heading>
                        {data.name},{data.sys.country}
                      </Heading>
                      <HStack>
                        <HStack m={2} p={2} fontSize={30} alignItems={"center"}>
                          <WiHumidity />
                          <Text>: {data.main.humidity}</Text>
                        </HStack>
                        <HStack m={2} p={2} fontSize={30}>
                          <GiWindsock />
                          <Text>: {data.wind.speed}</Text>
                        </HStack>
                      </HStack>
                    </VStack>
                  </Box>
                )}
              </VStack>
              : <VStack h={"70vh"} justifyContent={"center"}>
                    <Heading  textAlign={"center"}>Not Found!!....Search Diffrent</Heading>
              </VStack>
              
            }
          </Card>
        </VStack>

        {/* <CityForm/> */}
      </Box>
    </div>
  );
}

export default WeartherApp;

// [
//     {
//         "id": 802,
//         "main": "Clouds",
//         "description": "scattered clouds",
//         "icon": "03d"
//     }
// ]
