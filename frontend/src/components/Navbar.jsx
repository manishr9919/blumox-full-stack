import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  return (
    <Flex
      {...props}
      // marginTop="13px"
      justify="space-between"
      align="center"
      padding="10px"
      // border="1px solid red"
      wrap="wrap"
      width="1190px"
      height="56px"
    >
      <Heading color="white">Fly Globe</Heading>
      <Box
        // {...props}

        width="638px"
        color="white"
        height="24px"
        display="flex"
        // border="1px solid  green"
        justifyContent="space-between"
      >
        <Link to="/">Home</Link>
        <Link to="/first">First</Link>
        <Link to="/business">Business</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">SignUp</Link>
      </Box>
    </Flex>
  );
};
