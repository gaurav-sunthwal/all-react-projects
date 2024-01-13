import {
  Box,
  Button,
  Card,
  HStack,
  Heading,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import haze from "./Img/haze.png";
import sunny from "./Img/sunny.png";
import rain from "./Img/rain.png";
import Clouds from "./Img/Clouds.png";
import "./Style.css"
function WeartherApp() {
  const [inputValue, setinputValue] = useState("");
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

  async function handalClick() {
    weatherData(inputValue);
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
            <HStack>
              <Input
                type="text"
                placeholder="Search City!!"
                value={inputValue}
                onChange={(e) => {
                  setinputValue(e.target.value);
                }}
              />
              <Button onClick={handalClick}>Search</Button>
            </HStack>

            <VStack>
              {data && (
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
                        : haze
                    }
                  />


                  <Heading>{Math.floor(data.main.temp - 273.15)}<sup>o</sup>C</Heading>

                  <Heading>{data.name},{data.sys.country}</Heading>
                </VStack>
              )}
            </VStack>
          </Card>
        </VStack>
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
