import React from "react";
import { Box, Flex, Heading, Button, Text, Textarea } from "@chakra-ui/react";

export const TouchContactForm = () => {
  return (
    <Box
      w="1273px"
      position="relative"
      h="272px "
      border="2px solid bue"
      mt="72px"
      ml="50px"
      gap=""
    >
      <Flex justify="space-between" ml="20px">
        <Box w="403px" h="78px" border="1px solid rd">
          <Text mt="10px" fontFamily="sans-serif" fontSize="25px">
            {" "}
            Your Name
          </Text>
        </Box>
        <Box w="403px" h="78px" border="1px solid rd">
          {" "}
          <Text mt="10px" fontFamily="sans-serif" fontSize="25px">
            {" "}
            Email Address
          </Text>
        </Box>
        <Box w="403px" h="78px" border="1px solid rd">
          {" "}
          <Text mt="10px" fontFamily="sans-serif" fontSize="25px">
            {" "}
            Phone Number (optional)
          </Text>
        </Box>
      </Flex>
      <Flex justify="space-between" ml="20px">
        <Textarea w="403px" border="1px solid black"></Textarea>
        <Textarea w="403px" border="1px solid black"></Textarea>
        <Textarea w="403px" border="1px solid black"></Textarea>
      </Flex>
      <Heading ml="20px">Message</Heading>
      <Textarea w="1273px" h="100px" border="1px solid black"></Textarea>
      <Button mt="50px " border="1px solid black" borderRadius="20px" bg="white " color="black"  w="173px " h="39px"> LEAVE US A MESSAGE</Button>
    </Box>
  );
};
