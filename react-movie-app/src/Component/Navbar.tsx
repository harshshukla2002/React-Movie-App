import { Box, Heading } from "@chakra-ui/react";
import "../CSS/Navbar.css";

const Navbar = () => {
  return (
    <Box
      className="logo"
      backgroundColor={"#264653"}
      color="white"
      p="10px"
      w="100%"
    >
      <Heading fontFamily={"sans-serif"} color="#9b5de5">
        Movie
      </Heading>
    </Box>
  );
};

export default Navbar;
