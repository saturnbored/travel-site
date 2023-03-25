import React, { useState } from "react";
import { Box, Button, Hide, Show, SimpleGrid, Text } from "@chakra-ui/react";
import PackageCard from "./Cards/PackageCard";

const data = [
  "https://s3-alpha-sig.figma.com/img/d2bd/8757/cb7f2e97838a2566be1e4a44b5846f3a?Expires=1679875200&Signature=nIT8L3NQA8aUQRC0XJDtk4Tc5C4aPsCSIcPRl3lmUPbzBmFfkOLiZQ1voQxUhG1BIgx-aVm0PTp6dofJTheMEVIJVlllgJgvoOS5d44IaJFUXJHA98pXuy1qn4XyCPorwBSNhcFQ4gfXXLHhHBt-q8atF~KK1g3nUmzE-kCs-nQ1rQoOxb6GCXZBtndxQaBy9t2peRSN40C4u~MSotGkVe8FU5KFeUBQYm8THBGjUwlIiGsQmnWq6059KU7jWOKmsPyHa~iAJVm00E6wbcwswCiENIwPTPquxxSzlIlFvg-X4DoUizHm21tj1vr4UREgU-wAgmpzKUJEqLPgG3UafQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/7ebd/fd03/3221b2aeb0e9dae54af18ac8a3130e2a?Expires=1679875200&Signature=NYWB06nVkHl6Q77ZmW4ZCJ6qmJqWrs82R1uzoyjuf6RWoCKlSLo64STUoarr096cpqylyH4qCp-eJs1vPu2DkDYnIuYfnHfVP42e1mYMvy42UsTUt2WHyGSL6hhkJZyD5fKx4IWvZTYBrFe-0RyrM3g2HALk9ZsRHjMmBMLkyeR6Az8FLZ-GwtHPLvLRNxkivk7Gtkz67SUMJEVN080j~B8kGbP-e~ypKxBPkO6RFbqJ6sAnwSRBnfseJ3MkHSYYCzo6kav-AWSfssjxjJuM06nL9GyG1JU5jkSDuYehecDvF5crt82vRpnFfSOm~pYprhdyxpcNPujOSQFfvyPgnw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/5da2/3758/815ecd7e640be200b17e3ad2b852b674?Expires=1679875200&Signature=qNr7DHs~Nn412IXaP92xr1VbJJIKJzVPx37IazxU5f3x9vjIT6dijKJrRZq~97rmIqrfX-GyNJhK9zAe0O0ebwVjjEz1BpeHbsBCEDITL4JDas6dmfuYa7PF9Cv9k4Ilx8D5kv3NlYFF3xgU8Ja8XoBcIzk4dfCzlO4U7usbcu8huAsoyNFiKLhKb6smPdT44OcCa-jWuGldO5N6Z-gzAPvGeGP7y6x6aqGH0ltQvQ9IEvySmk1CI-o5K0C~BTi0ofX5c3uPbkBgEyIMR~SNaYyT1tT73gDIJeTALObWwYyHwVWKwUH8SmyYhl8JYuJTyD7cK3RQIHbUzJE1HzvtXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
];

const data2 = [
  "https://s3-alpha-sig.figma.com/img/d2bd/8757/cb7f2e97838a2566be1e4a44b5846f3a?Expires=1679875200&Signature=nIT8L3NQA8aUQRC0XJDtk4Tc5C4aPsCSIcPRl3lmUPbzBmFfkOLiZQ1voQxUhG1BIgx-aVm0PTp6dofJTheMEVIJVlllgJgvoOS5d44IaJFUXJHA98pXuy1qn4XyCPorwBSNhcFQ4gfXXLHhHBt-q8atF~KK1g3nUmzE-kCs-nQ1rQoOxb6GCXZBtndxQaBy9t2peRSN40C4u~MSotGkVe8FU5KFeUBQYm8THBGjUwlIiGsQmnWq6059KU7jWOKmsPyHa~iAJVm00E6wbcwswCiENIwPTPquxxSzlIlFvg-X4DoUizHm21tj1vr4UREgU-wAgmpzKUJEqLPgG3UafQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/7ebd/fd03/3221b2aeb0e9dae54af18ac8a3130e2a?Expires=1679875200&Signature=NYWB06nVkHl6Q77ZmW4ZCJ6qmJqWrs82R1uzoyjuf6RWoCKlSLo64STUoarr096cpqylyH4qCp-eJs1vPu2DkDYnIuYfnHfVP42e1mYMvy42UsTUt2WHyGSL6hhkJZyD5fKx4IWvZTYBrFe-0RyrM3g2HALk9ZsRHjMmBMLkyeR6Az8FLZ-GwtHPLvLRNxkivk7Gtkz67SUMJEVN080j~B8kGbP-e~ypKxBPkO6RFbqJ6sAnwSRBnfseJ3MkHSYYCzo6kav-AWSfssjxjJuM06nL9GyG1JU5jkSDuYehecDvF5crt82vRpnFfSOm~pYprhdyxpcNPujOSQFfvyPgnw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
];

const options = ["Maldives", "Samudram", "Cordelia", "Agatti", "More"];

const Option = ({ children, isSelected, handleClick }) => {
  return (
    <Button
      colorScheme={"telegram"}
      variant={isSelected ? "solid" : "outline"}
      pt={"15px"}
      pl={["10px", "25px", "15px", "5px"]}
      py={"35px"}
      size="lg"
      onClick={handleClick}
      borderRadius="0px"
      //   minW={'fit-content'}
    >
      {children}
    </Button>
  );
};

const Packages = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Box
      pl={["10px", "10px", "10px", "70px"]}
      pr={["10px", "10px", "10px", "70px"]}
      mt={["100px", "100px", "100px", "150px"]}
      mb={"100px"}
      width = "full"
    >
      <Text
        h={["33px", "33px", "44px", "44px"]}
        textAlign={"center"}
        fontWeight={700}
        fontSize={["17px", "32px", "32px", "32px"]}
        lineHeight={"44px"}
        mb={"10px"}
      >
        Best Packages For You
      </Text>
      <Text
        textAlign={"center"}
        fontSize={["12px", "14px", "14px", "16px"]}
        color={"#5A5A5A"}
        pt={"20px"}
      >
        This is a unique experience on ship, sea and land, exploring different
        coral islands of Lakshadweep.
      </Text>
      <Box display = "flex" justifyContent={"center"} ml = {{sm: "120px", base: "120px"}} >
        {/* <div> */}
      <SimpleGrid
        columns={[3, 4, 5, 6]}
        mt={"50px"}
        mb={"50px"}
        pl={["", "70px", "70px", "70px"]}
        gap="1px"
        spacing={"1"}
        ml={{ lg: "10vw", sm: "25vw" }}
        textAlign="center"
        width={"full"}
        minWidth = "100vw"
      >
        <Option isSelected={selected == 0} handleClick={() => setSelected(0)}>
          {options[0]}
        </Option>
        <Hide below="700px">
          <Option isSelected={selected == 1} handleClick={() => setSelected(1)}>
            {options[1]}
          </Option>
          <Hide below="800px">
            <Option
              isSelected={selected == 2}
              handleClick={() => setSelected(2)}
            >
              {options[2]}
            </Option>
            <Hide below="900px">
              <Option
                isSelected={selected == 3}
                handleClick={() => setSelected(3)}
              >
                {options[3]}
              </Option>
            </Hide>
          </Hide>
        </Hide>
        <Option isSelected={selected == 4} handleClick={() => setSelected(4)}>
          {options[4]}
        </Option>
      </SimpleGrid>
      {/* </div> */}
      </Box>
      <Hide below="900px">
        <SimpleGrid columns={[1, 2, 2, 3]}>
          {data.map((el, index) => (
            <PackageCard key={index} url={el} />
          ))}
        </SimpleGrid>
      </Hide>
      <Show below="900px">
        <SimpleGrid columns={[1]}>
          {data2.map((el, index) => (
            <Box display="flex" justifyContent={"center"}>
              <PackageCard key={index} url={el} />
            </Box>
          ))}
        </SimpleGrid>
      </Show>

      <Button
        colorScheme="blue"
        variant="outline"
        display={"block"}
        m={"auto"}
        mt={"50px"}
      >
        Discover More
      </Button>
    </Box>
  );
};

export default Packages;
