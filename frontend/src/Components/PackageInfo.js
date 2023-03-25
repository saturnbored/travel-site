import {
  Box,
  Divider,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Image,
  Button,
  UnorderedList,
  ListItem,
  Tab,
  HStack,
} from "@chakra-ui/react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import overview from "../Images/overview.png";
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Overview = ({ overviewRef, myOverviewRef }) => {
  return (
    <Box
      ref={overviewRef}
      display="flex"
      flexDir={"column"}
      flexWrap="wrap"
      justifyContent={"center"}
      alignContent="center"
      gap="2vw"
    >
      <Image src={overview} ref={myOverviewRef} />
      <Box>
        <Text textColor={"#3A3A3A"} fontSize="24px" fontWeight={"semibold"}>
          Package Overview
        </Text>
        <Box>
          <Text textColor={"#5A5A5A"} fontSize="16px" textAlign={"justify"}>
            Experience World-class Service at Kandima Maldives - Escape the
            ordinary Located on the largest island in Dhaalu Atoll, Kandima
            Maldives has the longest outdoor swimming pool in the Maldives, an
            abundance of water-sports, the largest beach club and tennis and
            basketball courts. It offers a marine biology centre, an art studio
            and cooking classes. Located at a 30-minute flight from Male’ and
            followed by a 20-minute boat ride to the island, the resort offers
            studios and villas with a private terrace and private pool. They
            offer endless tropical views. For fitness lovers, Kandima Maldives
            has a gym with personal trainers and provides classes like
            anti-gravity yoga, Zumba, aqua-bike classes and POUND® fitness
            lessons. Guests can hire bikes or electric scooters. Guests can
            choose among the 10 restaurants and bars the property offers. Sea
            Dragon serves authentic Chinese cuisine while Forbidden Bar plays
            live music in the night. Start the day at Aroma with fresh beverages
            and baked goods.
          </Text>
          <br />
          <Text textColor={"#5A5A5A"} fontSize="16px" textAlign={"justify"}>
            For total relaxation, choose from massages, facials and a range of
            Signature local treatments. The Kandima Kids Club is run by a
            multilingual team of certified child care-givers. We speak your
            language! Kandima Maldives - Escape the ordinary...
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

const DayPlan = ({ day_id }) => {
  return (
    <Box
      display="flex"
      // justifyContent={"center"}
      // flexWrap="wrap"
      // alignContent="flex-start"
      gap="4vw"
    >
      <Box>
        <Button colorScheme={"telegram"}> Day {day_id}</Button>
      </Box>
      <Box
        display="flex"
        flexDir={"column"}
        justifyContent="flex-start"
        flexWrap={"wrap"}
        alignContent="flex-start"
        gap="1vw"
        p="1vw"
      >
        <Text
          textAlign={"left"}
          textColor="#3A3A3A"
          fontWeight={"semibold"}
          fontSize="16px"
        >
          ARRIVAL AT MALDIVES
        </Text>
        <Divider borderColor="#A2A8AB" />
        <Text textAlign={"justify"} textColor="#5A5A5A" fontSize={"16px"}>
          On arrival at the Maldives International airport you will be met by
          the resort's airport representative and will be transferred to Vivanta
          By Taj Coral Reef by a speedboat &#40; shared basis &#41; . Afternoon
          free for relaxation . Overnight stay at the resort.
        </Text>
      </Box>
    </Box>
  );
};

const Itineary = ({ itinearyRef, myItinearyRef }) => {
  return (
    <Box
      ref={itinearyRef}
      display="flex"
      flexDir={"column"}
      flexWrap="wrap"
      justifyContent={"center"}
      alignContent="center"
      gap="1vw"
    >
      <Box ref={myItinearyRef}>
        <Text textColor={"#3A3A3A"} fontSize="24px" fontWeight={"semibold"}>
          Day Wise Itineary
        </Text>
      </Box>
      <DayPlan day_id={1} />
      <DayPlan day_id={2} />
      <DayPlan day_id={3} />
    </Box>
  );
};

const AdditionalInfo = ({ additionalRef, myAdditionalRef }) => {
  return (
    <Box
      ref={additionalRef}
      display="flex"
      flexDir={"column"}
      flexWrap="wrap"
      justifyContent={"center"}
      alignContent={{
        lg: "flex-start",
        md: "flex-start",
        sm: "center",
        base: "center",
      }}
      gap="1vw"
      px="3vw"
    >
      <Box ref={myAdditionalRef}>
        <Text
          textColor={"#3A3A3A"}
          fontSize="24px"
          fontWeight={"semibold"}
          textAlign="left"
        >
          {" "}
          Additional Information{" "}
        </Text>
      </Box>
      <Box
        display="flex"
        flexDir={"column"}
        flexWrap="column"
        justifyContent={"center"}
        alignContent="center"
        gap="2vw"
      >
        <Box
          display="flex"
          flexDir={"column"}
          flexWrap="column"
          justifyContent={"center"}
          alignContent="center"
          gap="1vw"
        >
          <Text
            textColor={"#3A3A3A"}
            fontWeight="bold"
            fontSize={"16px"}
            textAlign="left"
          >
            {" "}
            Inclusions{" "}
          </Text>
          <UnorderedList
            display="flex"
            flexDir="column"
            justifyContent={"center"}
            flexWrap="wrap"
            alignContent={"center"}
            gap="1vw"
          >
            <ListItem textAlign={"left"} textColor={"#5A5A5A"} fontSize="16px">
              Lorem ipsum dolor sit amet
            </ListItem>
            <ListItem textAlign={"left"} textColor={"#5A5A5A"} fontSize="16px">
              Consectetur adipiscing elit
            </ListItem>
            <ListItem textAlign={"left"} textColor={"#5A5A5A"} fontSize="16px">
              Integer molestie lorem at massa
            </ListItem>
            <ListItem textAlign={"left"} textColor={"#5A5A5A"} fontSize="16px">
              Facilisis in pretium nisl aliquet
            </ListItem>
          </UnorderedList>
        </Box>
        <Box
          display="flex"
          flexDir={"column"}
          flexWrap="column"
          justifyContent={"center"}
          alignContent="center"
          gap="1vw"
        >
          <Text
            textColor={"#3A3A3A"}
            fontWeight="bold"
            fontSize={"16px"}
            textAlign="left"
          >
            {" "}
            Exclusion{" "}
          </Text>
          <UnorderedList
            display="flex"
            flexDir="column"
            justifyContent={"center"}
            flexWrap="wrap"
            alignContent={"center"}
            gap="1vw"
          >
            <ListItem textAlign={"left"} textColor={"#5A5A5A"} fontSize="16px">
              Lorem ipsum dolor sit amet
            </ListItem>
            <ListItem textAlign={"left"} textColor={"#5A5A5A"} fontSize="16px">
              Consectetur adipiscing elit
            </ListItem>
            <ListItem textAlign={"left"} textColor={"#5A5A5A"} fontSize="16px">
              Integer molestie lorem at massa
            </ListItem>
            <ListItem textAlign={"left"} textColor={"#5A5A5A"} fontSize="16px">
              Facilisis in pretium nisl aliquet
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
};

const PackageInfo = () => {
  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  const myAdditionalRef = useRef(null);
  const myOverviewRef = useRef(null);
  const myItinearyRef = useRef(null);

  // const [overviewVisible, setOverviewVisible] = useState(true);
  // const [itinearyVisible, setItinearyVisible] = useState(false);
  const { ref: overviewRef, inView: overviewReftIsVisible } = useInView();
  const { ref: itinearyRef, inView: itinearyRefIsVisible } = useInView();
  const { ref: additionalRef, inView: addtionalRefIsVisible } = useInView();

  return (
    <>
      {/* <Box> */}
      <Box
        mb="20px"
        display="flex"
        flexDir={"column"}
        justifyContent="center"
        gap="2vw"
      >
        <HStack
          spacing={"2vw"}
          position="sticky"
          top="0px"
          bg={"white"}
          p={"1vw"}
          zIndex="2"
        >
          <Box>
            <Link
              to="/package/#overview"
              onClick={(e) => {
                handleScroll(myOverviewRef.current);
              }}
            >
              <Text
                textColor={"#3A3A3A"}
                fontWeight="semibold"
                fontSize={"16px"}
              >
                OVERVIEW
              </Text>
            </Link>
            <p>
              {overviewReftIsVisible ? (
                <Divider borderColor={"#3282AD"} borderWidth={"3px"} />
              ) : (
                ""
              )}
            </p>
          </Box>
          <Box>
            <Link
              to="/package/#itineary"
              onClick={(e) => {
                handleScroll(myItinearyRef.current);
              }}
            >
              <Text
                textColor={"#3A3A3A"}
                fontWeight="semibold"
                fontSize={"16px"}
              >
                ITINEARY
              </Text>
            </Link>
            <p>
              {itinearyRefIsVisible && !overviewReftIsVisible ? (
                <Divider borderColor={"#3282AD"} borderWidth={"3px"} />
              ) : (
                ""
              )}
            </p>
          </Box>
          <Box>
            <Link
              to="/package/#additional-info"
              onClick={(e) => {
                handleScroll(myAdditionalRef.current);
              }}
            >
              <Text
                textColor={"#3A3A3A"}
                fontWeight="semibold"
                fontSize={"16px"}
              >
                ADDITIONAL INFO
              </Text>
            </Link>
            <p>
              {itinearyRefIsVisible ? (
                ""
              ) : addtionalRefIsVisible ? (
                <Divider borderColor={"#3282AD"} borderWidth={"3px"} />
              ) : (
                ""
              )}
            </p>
          </Box>
        </HStack>
        {/* </Box> */}
        <Overview
          id="overview"
          overviewRef={overviewRef}
          myOverviewRef={myOverviewRef}
        />
        <Divider borderColor="#A2A8AB" />
        <Itineary
          id="itineary"
          itinearyRef={itinearyRef}
          myItinearyRef={myItinearyRef}
        />
        <Divider borderColor="#A2A8AB" />
        <AdditionalInfo
          id="additional-info"
          additionalRef={additionalRef}
          myAdditionalRef={myAdditionalRef}
        />
      </Box>
    </>
  );
};

export default PackageInfo;
