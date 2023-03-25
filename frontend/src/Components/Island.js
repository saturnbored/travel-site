import React from "react";
import { Box, Hide, Show, SimpleGrid, Text } from "@chakra-ui/react";
import IslandCard from "./Cards/IslandCard";

const dataForDesktop = [
  "https://s3-alpha-sig.figma.com/img/0232/11f0/fcea7ebbd7b7402c18bff081f52199aa?Expires=1679875200&Signature=QkIiu2XXE-th7zZSAr6WVu~o15De7lfGAX8p3XBsXws0V8g-CbFU0CxUJazi9ZPBTyvOPNqHjgnhZXLHtkC-e1zX7IHHWpnjxuBOMOtuiQ1r2tKzoXXvnh70us9kANko6HNhfD5XJMj7qZh0zHN~O6c9Hl4sGW9-fDZj6DbtwH5ENjnAIfTISmE2BZuBbx4VII4~lV0tyo1En7WiJDv3DoF9FvFN1nVP0luV5RoeH772AaVEy1mXiNXmGRtfbh~~C6Udrss1S~M5Dj9ao80zWytlkxsoU055MnVzhyKO1fSKd~44PlPHBK5JxwBZr3IveGrBPiqpIEOKtU8rRfLNOA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/ff14/6e9c/a0e2d52b27f07dc45a72a18b23d0a455?Expires=1679875200&Signature=DBdCAfuZ3RXk2nUuCpiJuThM8bXsuBUnMWNgKgz6dBuJ96KGO8~Pee5H6O18~BU3vn6WpH7H4UMRBDI9od7kj57-WbxFZlZBbCDW65mkjanP44BXwRF9iGDYbY7CIrnI5wHY7v5FvmVrGAC2ZjEqHKCm1YJnFi1B2hPjS2bJ5OZZaMBdhD6BaK5tUcUj6ngNnhG7fvmp79Qse4Te~kh-j1vRSG7pfbAQ8wyC8Nu4Tpj7U5PrH5dx3J8KRcwWIIo5avz4CoOhFsPUm67xbE~0RSTd2evM3LNy8zmpmJWCan8DyFkSAmvel7RiJbCGHmd~t-GqBGEsuPsdmdKnHjfPMw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/c60e/6e0e/3cec84d6c1a961a50654233cb0ae2658?Expires=1679875200&Signature=DZIQ3PnVR6Zw7kTmojmbqC0DyO6xdRXXhjEyCOH2v6mUouyPeIbBD5yNKG7XgjJlMJASA4KPivaD9OkQ4XN4cqxme~n7VuRvqfP32ncX57a0rvji~Tk0PefhOSVFoy1YfKJIPH6K8TWEbWZakzuW1Zug8KFzDvpZVYgZfo7Vy94I~1NMzcy9lBvYpzvCqkwEVtt7TkxWh0dAocmhyLFPP5bZ9HDQhcBzoqbTwQNf4KH~~IOCJj9RQtVSypH24PBGhyV1wWFa4oRi2Z8oGv58u5iRRLw6sVqnNczSgiOfJRACj1flBRwi6I~lqFs4JtZM8UeYytxU4DjfMIblfPxinw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/9e2a/c01a/ef2cb548afae5cca35d28a59546579c0?Expires=1679875200&Signature=bjJKt2dRTkhA9F7UVI7WGw0Bcz1BH-L~JVlUIEdLDEfkHmLD30KAVAczooZIWPU6rHrBO9Jwt5mEctdvDiThcT4V74N9RW8qm-e1h26y4p-KplRJUgHJxTZSMN9FXDVc7poXTRu1gCSdIxmHDJboVPVPKXZKADuJ1eYUauvAkRRhFyO8v5RLwax6GH13RUoecjSCb15EADJ0QK-eBJZ-YVCEuj9~c4cq35xnMbtBX3rOd6XwlbWSHQaKB9VZGSVHXWlbDg5tf3j1~VajPWnqyXPq0cXjPmGx4c9Y~SeIydpQNjKNaj-s3I6FRV32eAQPMV7l1AnJtWxxYTB9L3PLcg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/9417/c2ad/2ef5f5b9d892c0404f1df0c1207d44ee?Expires=1679875200&Signature=S16rYErl2HQ0iyiSdWNpbwSMHgg8p~UjRbEYeHao4Q471sgWa38IBN84G7kgNR5GF~TAefKairVsJsUV5z~gnamEzWJeldgK1n5bx1ZqkCyHufdrkZaAjfgrZBVIFA7KAY1KnEz1YNpIYOSvXwHz6mtu6ID~8do3dyS1mud2G-XjRTMjAYHqVnUpEb9HQVvxEDts59GrmwKr0JR6O07oBDwEVLqeTMp6anEfwn4PqaekxWjQeHQXtII-ClY-h7F68TVSktHdwLCvQKE95879JGrN-JQriBx7afqEXJQ8j3BRWPhD5l0nU08qFUd9d~nvqCpJdFf-OZvsMQbC2ChhtQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/cde3/cceb/1a82a60023b9f667965bd5475e3b223f?Expires=1679875200&Signature=pkuYjhuntOT0fZ3DZ3ua1RTmdYdnXqXTo6OybbxaEE12WGs3z67IvaJLqpL3a7Twp5m9Zh8s67PQdCWBS9EpnJ0kS804bE01ULUINcflj6XDPf73qN80sbZ7vjAPvqVo9K67Wm2nPSGbtvDkPEFo0BKvnmIAGQYDvhJOIV3D~RTIKoaLyFOe7hCgNpYgnlgUVnDjhwa3A8W8QnPETXqlMeiYXwjrcFbhtU9iJmw126E1ohdcsL3qVOsbEKlhhiL5gMcHcgdkYalzBXd5xdioXfL1dCNCEDjuLFIskIDuUNyBsX7-KOCpT6LCwTD6VSVHhrPfwbV5QA9beA1f1Twb0Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
];

const dataBelowDesktop = [
  "https://s3-alpha-sig.figma.com/img/0232/11f0/fcea7ebbd7b7402c18bff081f52199aa?Expires=1679875200&Signature=QkIiu2XXE-th7zZSAr6WVu~o15De7lfGAX8p3XBsXws0V8g-CbFU0CxUJazi9ZPBTyvOPNqHjgnhZXLHtkC-e1zX7IHHWpnjxuBOMOtuiQ1r2tKzoXXvnh70us9kANko6HNhfD5XJMj7qZh0zHN~O6c9Hl4sGW9-fDZj6DbtwH5ENjnAIfTISmE2BZuBbx4VII4~lV0tyo1En7WiJDv3DoF9FvFN1nVP0luV5RoeH772AaVEy1mXiNXmGRtfbh~~C6Udrss1S~M5Dj9ao80zWytlkxsoU055MnVzhyKO1fSKd~44PlPHBK5JxwBZr3IveGrBPiqpIEOKtU8rRfLNOA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/ff14/6e9c/a0e2d52b27f07dc45a72a18b23d0a455?Expires=1679875200&Signature=DBdCAfuZ3RXk2nUuCpiJuThM8bXsuBUnMWNgKgz6dBuJ96KGO8~Pee5H6O18~BU3vn6WpH7H4UMRBDI9od7kj57-WbxFZlZBbCDW65mkjanP44BXwRF9iGDYbY7CIrnI5wHY7v5FvmVrGAC2ZjEqHKCm1YJnFi1B2hPjS2bJ5OZZaMBdhD6BaK5tUcUj6ngNnhG7fvmp79Qse4Te~kh-j1vRSG7pfbAQ8wyC8Nu4Tpj7U5PrH5dx3J8KRcwWIIo5avz4CoOhFsPUm67xbE~0RSTd2evM3LNy8zmpmJWCan8DyFkSAmvel7RiJbCGHmd~t-GqBGEsuPsdmdKnHjfPMw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/c60e/6e0e/3cec84d6c1a961a50654233cb0ae2658?Expires=1679875200&Signature=DZIQ3PnVR6Zw7kTmojmbqC0DyO6xdRXXhjEyCOH2v6mUouyPeIbBD5yNKG7XgjJlMJASA4KPivaD9OkQ4XN4cqxme~n7VuRvqfP32ncX57a0rvji~Tk0PefhOSVFoy1YfKJIPH6K8TWEbWZakzuW1Zug8KFzDvpZVYgZfo7Vy94I~1NMzcy9lBvYpzvCqkwEVtt7TkxWh0dAocmhyLFPP5bZ9HDQhcBzoqbTwQNf4KH~~IOCJj9RQtVSypH24PBGhyV1wWFa4oRi2Z8oGv58u5iRRLw6sVqnNczSgiOfJRACj1flBRwi6I~lqFs4JtZM8UeYytxU4DjfMIblfPxinw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
];

const Island = () => {
  return (
    <Box
      mt={"100px"}
      pl={["10px", "10px", "10px", "70px"]}
      pr={["10px", "10px", "10px", "70px"]}
    >
      <Text
        textAlign={"center"}
        fontSize={"32px"}
        fontWeight={"bold"}
        color={"#3A3A3A"}
        mb = {"15px"}
      >
        Island Stays
      </Text>

      <Text
        textAlign={"center"}
        m="auto"
        fontSize={"16px"}
        color={"#5A5A5A"}
        w={["310px", "528px", "700px", "1106px"]}
      >
        One can choose from a variety of beautiful coral islands which offers
        different staying experiences from thatched huts to luxurious modern
        properties. Every island offers a wider range of water sports and beach
        activities for you to enjoy.
      </Text>

      <Hide below="800px">
        <SimpleGrid columns={[1, 2, 2, 3]} mt={10} gap = "5" justifyContent={"center"} alignItems= "center">
          {dataForDesktop.map((el, index) => (
            <IslandCard key={index} url={el} />
          ))}
        </SimpleGrid>
      </Hide>
      <Show below="800px">
        <SimpleGrid columns={[1]} mt={10}>
          {dataBelowDesktop.map((el, index) => (
            <Box display={"flex"}  justifyContent = "center">
            <IslandCard key={index} url={el} />
            </Box>
          ))}
        </SimpleGrid>
      </Show>
    </Box>
  );
};

export default Island;
