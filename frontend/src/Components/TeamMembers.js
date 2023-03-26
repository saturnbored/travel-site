import {
  Box,
  Divider,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Heading,
  StackDivider,
  Image,
  Button,
  UnorderedList,
  ListItem,
  Tab,
  Stack,
  Select,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import overview from "../Images/overview.png";
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const TestimonialCard = (props) => {
  const [newRole, setNewRole] = useState("");

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      const handleSubmit = async () => {
        // e.preventDefault();
        try {
          console.log("herherhe", newRole);
          let res = await fetch("http://localhost:8080/admin/team/update", {
            method: "PATCH",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${props.token}`,
            },
            body: JSON.stringify({
              email: props.email,
              newRole: newRole,
            }),
          });
          res = await res.json();
          console.log(res);
          props.setFetchTeam(!props.fetchTeam);
          // localStorage.setItem("token", res.token);
          // navigate("/");
        } catch (err) {
          console.log(err.message);
        }
      };
      handleSubmit();
      setClicked(false);
    }
  }, [newRole, clicked]);

  const handleDelete = async () => {
    try {
      let res = await fetch("http://localhost:8080/admin/team/remove", {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${props.token}`,
        },
        body: JSON.stringify({
          email: props.email,
        }),
      });
      res = await res.json();
      console.log(res);
      props.setFetchTeam(!props.fetchTeam);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Card shadow={"2xl"} borderRadius={"5%"} px={"30px"} maxW={{ lg: "50vw" }}>
      <CardBody>
        <Stack spacing="4" alignItems={"center"}>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Name :
            </Heading>
            <Text pt="2" fontSize="sm">
              {props.name}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Email:
            </Heading>
            <Text pt="2" fontSize="sm">
              {props.email}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Role:
            </Heading>
            <Text pt="2" fontSize="sm">
              {props.role}
            </Text>
          </Box>

          <Select
            placeholder="Select sub-admin role"
            textAlign={"center"}
            maxW={"300px"}
            onChange={(e) => setNewRole(e.target.value)}
          >
            <option value="backend">Backend Engineer</option>
            <option value="frontend">Front Engineer</option>
            <option value="super">Super</option>
          </Select>
          <Stack direction="row" spacing={4} align="center">
            <Button
              colorScheme="blue"
              variant="solid"
              width="300px"
              onClick={() => setClicked(true)}
            >
              Submit
            </Button>
          </Stack>
          <Stack direction="row" spacing={4} align="center">
            <Button colorScheme="red" variant="solid" width="300px"
            onClick={handleDelete}
            >
              Delete
            </Button>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
};

const TeamMembers = () => {
  const member = [
    {
      key: 1,
      name: "Kartik Singh",
      email: "kartik@gmail.com",
      role: "Backend-Developer",
    },
    {
      key: 2,
      name: "Shivam  Ruhil",
      email: "Ruhil@gmail.com",
      role: "Backend-Developer",
    },
    {
      key: 3,
      name: "Lakshya Singh",
      email: "lak@gmail.com",
      role: "Backend-Developer",
    },
    {
      key: 4,
      name: "Raj Singh",
      email: "raj@gmail.com",
      role: "Backend-Developer",
    },
    {
      key: 5,
      name: "Rohit Singh",
      email: "rohit@gmail.com",
      role: "Backend-Developer",
    },
  ];

  const [team, setTeam] = useState([]);
  const [fetchTeam, setFetchTeam] = useState(false);
  const token = JSON.parse(localStorage.getItem("session")).token;

  useEffect(() => {
    const fetchTeams = async function () {
      try {
        let res = await fetch("http://localhost:8080/admin/team", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        res = await res.json();
        console.log(res);
        setTeam(res);
        // localStorage.setItem("token", res.token);
        // navigate("/");
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchTeams();
  }, [fetchTeam]);

  return (
    <>
      {/* <Box> */}
      <Box
        mb="20px"
        display="flex"
        flexDir={"column"}
        justifyContent="center"
        alignItems={"center"}
        gap="10vw"
      >
        {team?.map((el, index) => (
          <TestimonialCard
            key={index}
            name={el.name}
            role={el.privilege.role}
            email={el.email}
            token={token}
            fetchTeam={fetchTeam}
            setFetchTeam={setFetchTeam}
          />
        ))}
      </Box>
    </>
  );
};

export default TeamMembers;
