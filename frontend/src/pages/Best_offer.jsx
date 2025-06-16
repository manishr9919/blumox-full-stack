import React from "react";
import { Box, Heading, Text ,Image} from "@chakra-ui/react";
import GroupImage from "../Images/Group 1321315163.png";

export const Best_offer = (props) => {
  return (
    <Box
      {...props}
      w="1458px"
      h="310px"
      //   marginTop="833px"
      marginLeft="50px"
    //   border="1px solid #000000"
      bg="#FFF6F6"
    >
      <Heading textAlign="center" pt="50px">
        {" "}
        ----BEST OFFERS
      </Heading>
      <Box textAlign="center" pt="20px">
        <Text>
          We're excited to offer you an exclusive voucher to help you save on
          your next adventure. Whether you're{" "}
        </Text>
        <Text>
          planning a weekend getaway, a family vacation, or a solo expedition.
        </Text>
      </Box>
      <Box
        display="Flex"
        position="relative"
        w="1400px"
        h="159px"
        ml="64px"
        // border="1px solid green"
        mt="10px"
      >
        <Image src={GroupImage}/>
      </Box>
    </Box>
  );
};
