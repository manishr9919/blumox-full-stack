import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import SocialMedia from "../Images/Social Media.png";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export const GetStartedWithForm = (props) => {
  return (
    <>
      <Flex
        gap="250px"
        ml="50px
      "
        {...props}
      >
        <Box w="1098px" h="270px" border="1px solid rd">
          <Text w="114px " fontFamily="serif" fontSize="22px" h="36px">
            Get Started
          </Text>
          <Heading
            w="1098px"
            h="100px"
            fontSize="40px"
            fontFamily="sans-serif"
            letterSpacing="-6%"
            lineHeight="60px"
          >
            Get in touch with us,
          </Heading>
          <Heading
            w="1098px"
            h="120px"
            fontSize="40px"
            fontFamily="sans-serif"
            letterSpacing="-6%"
            lineHeight="40px"
          >
            Get in touch with us, We're here to assist you.
          </Heading>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          gap="20px"
          w="49px"
          h="197px"
          border="1px solid gren"
          mt="50px"
        >
          <Box
            w="49px"
            h="49px"
            borderRadius="50%"
            border="1px solid black"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <FaInstagramSquare />
          </Box>
          <Box
            w="49px"
            h="49px"
            borderRadius="50%"
            border="1px solid black"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <FaLinkedin />
          </Box>
          <Box
            w="49px"
            h="49px"
            borderRadius="50%"
            border="1px solid black"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <FaLinkedin />
          </Box>
        </Box>
      </Flex>
    </>
  );
};
