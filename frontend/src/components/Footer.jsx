import React from "react";
import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";
import ListSocmed from "../Images/List Socmed.png";

export const Footer = () => {
  return (
    <>
      <Box mt="100px" w="1440px" h="383px" border="1px solid re" bg="#09132E">
        <Box
          mt="30px"
          display="Flex"
          justifyContent="space-around"
          border="1px solid black"
        >
          <Box mt="30px" w="177px" h="195px" border="1px solid gren">
            <Heading color="white">FLYGLOBE</Heading>
            <Text color="white">FlyGlobe is more than just a flight</Text>
            <Text color="white">booking app; it's your one-stop shop</Text>
            <Text color="white">for seamless travel experiences</Text>
          </Box>
          <Box
            display="flex"
            color="white"
            justifyContent="space-around"
            w="632px"
            h="195px"
            border="1px solid gren"
          >
            <Box>
              <Heading>About Us</Heading>
              <Text> Promo</Text>
              <Text> Help</Text>
              <Text>Order</Text>
              <Text>Contact</Text>
              <Text>FAQ</Text>
            </Box>
            <Box>
              <Heading> Resources </Heading>
              <Text> Documentation</Text>
              <Text> Carrier</Text>
              <Text>Order</Text>
              <Text>Work With Us</Text>
              <Text>Blog & News</Text>
              <Text>Affiliate</Text>
            </Box>
            <Box>
              <Heading> Legal </Heading>
              <Text> Terms and Condition</Text>
              <Text> Privacy Policy</Text>
              <Text>Cookies Policy</Text>
              <Text>Developers</Text>
            </Box>
          </Box>
          {/* Contact us  */}
          <Box w="177px" h="244px" border="1px solid gren">
            <Box textAlign="end" w="161px" h="103px " color="white">
              Contact Us flyglobe@gmail.com +12 345 678 09 Singapore, Indonesia
            </Box>
            <Box  color="white" w="170px" h="117px">
              <Heading> Follow Us On Social</Heading>
              {/* socail media box */}
              <Box w="160px" h="80px">
                <Image src={ListSocmed} />
              </Box>
            </Box>
          </Box>
        </Box>
        {/* footer line  */}
        <Box w="1320px" mt="50px" ml="50px" bg="white" h="2px"></Box>
      </Box>
    </>
  );
};
