import { Container, Flex, Heading, Image, Box, Text } from "@chakra-ui/react";
import React from "react";
import Ellipse112 from "../Images/Ellipse 112.png";
import Ellipse113 from "../Images/Ellipse 113.png";
import Ellipse114 from "../Images/Ellipse 114.png";
import Ellipse115 from "../Images/Ellipse 115.png";
import Ellipse116 from "../Images/Ellipse 116.png";
import VoucherCard1 from "../Images/Voucher Card (1).png";
import Cards from "../Images/Cards.png";
import Group1171276661 from "../Images/Group 1171276661.png";
export const ExploreNearby = () => {
  return (
    <Container w="1440px " border="1px solid rd " h="750px">
      <Heading textAlign="center" mt="100px">
        EXPLORE NEARBY
      </Heading>
      <Flex
        justify="space-evenly"
        w="1320px"
        border="1px solid gren"
        ml="75px"
        mt="50px"
      >
        <Box w="180px" h="180px" border="1px solid rd">
          <Image src={Ellipse112} />
          <Heading mt="30px" textAlign="center">
            Los Angelses
          </Heading>
          <Text textAlign="center">2- Hours Away</Text>
        </Box>
        <Box w="180px" h="180px" border="1px solid rd">
          <Image src={Ellipse113} />
          <Heading mt="30px" textAlign="center">
            Miami
          </Heading>
          <Text textAlign="center">2- Hours Away</Text>
        </Box>
        <Box w="180px" h="180px" border="1px solid rd">
          <Image src={Ellipse114} />
          <Heading mt="30px" textAlign="center">
            New York
          </Heading>
          <Text textAlign="center">2- Hours Away</Text>
        </Box>
        <Box w="180px" h="180px" border="1px solid rd">
          <Image src={Ellipse115} />
          <Heading mt="30px" textAlign="center">
            Los Vegas
          </Heading>
          <Text textAlign="center">2- Hours Away</Text>
        </Box>
        <Box w="180px" h="180px" border="1px solid rd">
          <Image src={Ellipse116} />
          <Heading mt="30px" textAlign="center">
            Texas
          </Heading>
          <Text textAlign="center">2- Hours Away</Text>
        </Box>
      </Flex>
      <Flex gap="20px" mt="180px" ml="50px">
        <Box w="329px" h="59px">
          <Image src={VoucherCard1} />
        </Box>
        <Box w="329px" h="59px">
          <Image src={VoucherCard1} />
        </Box>
        <Box w="329px" h="59px">
          <Image src={VoucherCard1} />
        </Box>
        <Box w="329px" h="59px">
          <Image src={VoucherCard1} />
        </Box>
        <Box w="329px" h="59px">
          <Image src={VoucherCard1} />
        </Box>
      </Flex>
      <Flex position="relative" mt="150px">
        <Box  position="relative" ml="50px" w="747px" h="215px" border="1px solid rd">
          <Image src={Cards} />
        </Box>
        <Box position="absolute" ml="950px" bt="150px">
          <Image src={Group1171276661} />
        </Box>
      </Flex>
    </Container>
    
  );
};
