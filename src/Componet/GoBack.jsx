import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { HStack, Text } from "@chakra-ui/react";
function GoBack() {
  return (
    <div>
      <Link to={"/"}>
        <HStack p={3} color={"green"}>
          <IoChevronBack /> 
          <Text>Go Back</Text>
        </HStack>
      </Link>
    </div>
  );
}

export default GoBack;
