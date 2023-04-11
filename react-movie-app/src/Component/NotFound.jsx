import { Box, Center, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Center>
      <Box>
        <Image
          src="https://2.bp.blogspot.com/-X9sVvOD0hrs/W5cz8WKyknI/AAAAAAAAEKI/s6mNIUQdsy4KGnCgtF1VSZlnj237ArxawCLcBGAs/s1600/not%2Bfound.gif"
          borderRadius={"20px"}
        />
        <Heading
          mt="30px"
          onClick={() => navigate("/")}
          _hover={{ color: "blue", cursor: "pointer" }}
        >
          <Flex alignItems={"center"}>
            Back To Home <BsArrowRight style={{ margin: "0px 10px" }} />
          </Flex>
        </Heading>
      </Box>
    </Center>
  );
};

export default NotFound;
