import {
  Box,
  Button,
  Card,
  HStack,
  Heading,
  Image,
  Input,
  VStack,
} from "@chakra-ui/react";

// img

import ola from "../CapsOps/Img/ola.png";
import ubar from "../CapsOps/Img/uber.png";
import { useEffect } from "react";

function CapsOps() {
  async function olaData() {
    let olaDataRes = await fetch(
      `https://devapi.olacabs.com/v1/api/corporate/rides?from_date=2016-09-01 00:00:00&to_date=2016-10-05 00:00:00&limit=5&page_num=1&order=ride_start_time_asc&user_email_id=corpwebtesting@corporate_partners.com

    `,
      {
        Headers: {
          "X-CORPORATE-TOKEN": "0tFiGxMcpDdZgTjggHlpXyf4zMcIpQiA7b_fArZJ",
        },
      }
    );
    let olaData = await olaDataRes.json();
    console.log(olaData);
  }

  useEffect(() => {
    return () => {
      olaData();
    };
  }, []);

  function submitBtn(e) {
    e.preventDefault();
  }
  return (
    <div>
      <Box>
        <VStack>
          <form>
            <Input m={2} w={"100%"} required />
            <Input m={2} w={"100%"} required />
            <Button m={2} type="submit" onClick={submitBtn}>
              Search
            </Button>
          </form>
        </VStack>

        <VStack p={4} h={"50vh"} justifyContent={"center"}>
          <HStack justifyContent={"center"}>
            <CapsOpsCard img={ola} price="32" />
            <CapsOpsCard img={ubar} price="32" />
          </HStack>
        </VStack>
      </Box>
    </div>
  );
}

function CapsOpsCard(props) {
  return (
    <>
      <Card bg="#1f1f1f" color={"white"} p={2} w={"33.33%"}>
        <Image
          p={3}
          w={"50%"}
          src={props.img}
          margin={"auto"}
          display={"block"}
        />
        <Heading textAlign={"center"}>{props.price}</Heading>
      </Card>
    </>
  );
}

export default CapsOps;
