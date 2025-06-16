import React from "react";
import { Navbar } from "@/components/Navbar";
import {
  Box,
  Text,
  Image,
  Container,
  Grid,
  Heading,
  Button,
  Flex,
} from "@chakra-ui/react";
import bgImage from "../Images/BG.png";
import firstImage from "../Images/First.png";
import secandImage from "../Images/secand.png";
import { SearchForm } from "@/components/SearchForm";
import { Best_offer } from "./Best_offer";
import Image1 from "../Images/Image (1).png";
import Image2 from "../Images/Image (2).png";
import Image3 from "../Images/Image (3).png";
import { ExploreNearby } from "@/components/ExploreNearby";
import { GetStartedWithForm } from "@/components/GetStartedWithForm";
import { TouchContactForm } from "@/components/TouchContactForm";
import {Footer} from "@/components/Footer"

export const Home = () => {
  return (
    <>
      <Box
        position="relative"
        id="mai_Container"
        width="1508px"
        height="733px"
        // border="1px solid red"
        backgroundImage={`url(${bgImage})`}
      >
        <Navbar id="navbar" marginLeft="125px" marginTop="13px" />
        <Box
          position="absolute" // or "relative" / "fixed" / "sticky"
          top="130px"
          left="780px"
          width="536px"
          height="527px"
          bg="#09132E"
          borderRadius="40px"
        >
          <SearchForm />
        </Box>

        <Box
          id="let-box-of-"
          width="959px"
          height="441px"
          marginTop="30px"
          marginLeft="26px"
          borderRadius="30px"
        >
          {/*  */}
          <Box
            display="Flex"
            flexDir="column"
            width="436Ppx"
            height="78px"
            // border="1px solid yellow"
            color="white"
            marginTop="79px"
          >
            <Text>EFFORTLESS TRAVEL WITH</Text>
            <Text>UNLOCK UNBEATABLE Flight Deals!</Text>
          </Box>
          <Box width="371px" height="42px" marginLeft="12px">
            <Text color="white">
              From Seamless Booking to Smooth Takeoff – We Take Care of Every
              Detail So You Can Enjoy the Journey!
            </Text>
          </Box>
          <Box marginLeft="814px" border="2px solid blue"></Box>

          <Box border="1px solid gree" id="Image-box" display="flex" gap={20}>
            <Image
              // border="1px solid red"
              width="142px"
              height="154px"
              marginTop="295px"
              marginLeft="178"
              src={firstImage}
            />
            <Image
              // border="1px solid red"
              width="142px"
              height="154px"
              marginTop="295px"
              marginLeft="178"
              src={secandImage}
            />
            <Image
              // border="1px solid red"
              width="142px"
              height="154px"
              marginTop="295px"
              marginLeft="178"
              src={firstImage}
            />
          </Box>
        </Box>
      </Box>
      {/* Best Offer */}
      <Best_offer />
      {/*  section no 3 */}
      <Container
        display="Flex"
        w="1350px"
        h="669px"
        mt="100px"
        border="1px solid re"
        ml="50px"
      >
        <Box w="675px" h="669px" border="1px solid blu" position="relative">
          <Heading ml="66px" marginTop="100px">
            DISCOVER
          </Heading>
          <Text fontSize="25px" ml="66px">
            More than 100 destinations waiting for you
          </Text>
          <Text mt="20px" ml="66px">
            Explore our curated list of the best countries to visit in 2024 and
            discover
          </Text>
          <Text ml="66px">incredible destinations waiting to be explored</Text>
          <Flex mt="100px" gap="30px" ml="66px">
            <Button color="white">All</Button>
            <Button>Asian</Button>
            <Button>European</Button>
            <Button>Middle-East</Button>
          </Flex>
          <Flex mt="20px" gap="30px" ml="66px">
            <Button>Beach Paradise</Button>
            <Button>Nature Retreats</Button>
            <Button>Romantic Escapes</Button>
          </Flex>
          <Flex mt="20px" gap="30px" ml="66px">
            <Button>Cultural Immersion</Button>
            <Button>African</Button>
            <Button>American</Button>
          </Flex>
        </Box>

        <Grid position="relative" border="3px solid yello" mt="7px">
          <Box border="2px solid blu" w="230px" h="207px">
            <Image src={Image2} />
          </Box>
          <Box
            position="absolute"
            border="2px solid ble"
            w="460px"
            h="430px"
            left="250px"
          >
            <Image h="430px" src={Image3} />
          </Box>
          <Box
            position="absolute"
            top="220px"
            border="2px solid bue"
            w="230px"
            h="207px"
          >
            <Image src={Image1} />
          </Box>
          <Box
            position="absolute"
            top="440px"
            border="2px solid ble"
            w="230px"
            h="207px"
          >
            <Image src={Image2} />
          </Box>
          <Box
            position="absolute"
            top="440px"
            left="250px"
            border="2px solid blu"
            w="230px"
            h="207px"
          >
            <Image src={Image3} />
          </Box>

          <Box
            position="absolute"
            top="440px"
            left="490px"
            border="2px solid ble"
            w="230px"
            h="207px"
          >
            <Image src={Image1} />
          </Box>
        </Grid>
      </Container>
      <ExploreNearby />
      <GetStartedWithForm mt="200px" />
      <TouchContactForm />
      <Footer />
    </>
  );
};
