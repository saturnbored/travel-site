import { useState } from "react";
import {
  Box,
  Button,
  Input,
  Textarea,
  Heading,
  List,
  ListItem,
} from "@chakra-ui/react";

export default function UpdatePackageForm() {
  // const handleAddMoreExclusion = (e) => {
  //   e.preventDefault();
  //   console.log("handleAddMoreExclusion")
  //   const exclusionList = document.getElementById("exclusion-list-update");
  //   const newExclusion = document.createElement("li");
  //   newExclusion.innerHTML = `<Input placeholder="Type any exclusion here" size="md" name="" class="chakra-input css-1kp110w" />`;
  //   exclusionList.appendChild(newExclusion);
  // };
  // const handleAddMoreInclusion = (e) => {
  //   e.preventDefault();
  //   console.log("handleAddMoreInclusion")
  //   const inclusionList = document.getElementById("inclusion-list-update");
  //   const newInclusion = document.createElement("li");
  //   newInclusion.innerHTML = `<Input placeholder="Type any inclusion here" size="md" name="" class="chakra-input css-1kp110w"/>`;
  //   // create a new react fragment and append it to the list
  //   inclusionList.appendChild(newInclusion);
  // };

  const [newPackage, setNewPackage] = useState({});
  const [inclusionList, setInclusionList] = useState([]);
  const [exclusionList, setExclusionList] = useState([]);
  const [inclusionItem, setInclusionItem] = useState("");
  const [exclusionItem, setExclusionItem] = useState("");

  return (
    <Box m="auto">
      <Heading as="h2" size="xl" mb="10px" mt="20px" textAlign="center">
        Update Package
      </Heading>
      <form>
        <Input
          placeholder="Type package name"
          size="md"
          name="package_name"
          // value="pre-populated package name"
          mb="6px"
          onChange={(e) =>
            setNewPackage({ ...newPackage, package_name: e.target.value })
          }
          value={newPackage.package_name ?? "pre-populated package name"}
        />
        <Input
          placeholder="Type package overview"
          size="md"
          name="overview"
          // value="pre-populated package overview"
          mb="6px"
          onChange={(e) =>
            setNewPackage({ ...newPackage, overview: e.target.value })
          }
          value={newPackage.overview ?? "pre-populated package overview"}
        />
        <Box>
          <Heading as="h3" size="lg" textAlign="center">
            Itineary
          </Heading>
          <div>
            <Heading as="h4" size="md" mb="4px">
              Day 1
            </Heading>
            <Textarea
              size="md"
              // value="pre-populated package overview day1 itineary"
              mb="6px"
              onChange={(e) =>
                setNewPackage({ ...newPackage, day1: e.target.value })
              }
              value={
                newPackage.day1 ??
                "pre-populated package overview day1 itineary"
              }
            />
          </div>
          <div>
            <Heading as="h4" size="md" mb="4px">
              Day 2
            </Heading>
            <Textarea
              size="md"
              // value="pre-populated package day2 itineary"
              mb="6px"
              onChange={(e) =>
                setNewPackage({ ...newPackage, day2: e.target.value })
              }
              value={newPackage.day2 ?? "pre-populated package day2 itineary"}
            />
          </div>
          <div>
            <Heading as="h4" size="md" mb="4px">
              Day 3
            </Heading>
            <Textarea
              size="md"
              // value="pre-populated package overview day3 itineary"
              mb="10px"
              onChange={(e) =>
                setNewPackage({ ...newPackage, day3: e.target.value })
              }
              value={
                newPackage.day3 ??
                "pre-populated package overview day3 itineary"
              }
            />
          </div>
        </Box>
        <Box>
          <Heading as="h3" size="lg" mb="6px" textAlign="center">
            Additional Info
          </Heading>
          <div>
            <Heading as="h3" size="lg" mb="6px">
              Inclusions
            </Heading>
            <List id="inclusion-list-update">
              <ListItem>
                {/* Have to map over the list of all the inclusions */}
                <Input
                  placeholder="Type any inclusion here"
                  size="md"
                  name=""
                  // value="pre-populated inclusion"
                  onChange={(e) => {
                    setInclusionItem(e.target.value);
                  }}
                  value={inclusionItem ?? "pre-populated inclusion"}
                />
              </ListItem>
            </List>
            {/* <Button onClick={handleAddMoreInclusion} mt="4px">
              Add More
            </Button> */}
          </div>
          <div>
            <Heading as="h3" size="lg" mb="6px">
              Exclusions
            </Heading>
            <List id="exclusion-list-update">
              <ListItem>
                {/* Have to map over the list of all exclusions */}
                <Input
                  placeholder="Type any exclusion here"
                  size="md"
                  name=""
                  onChange={(e) => {
                    setExclusionItem(e.target.value);
                  }}
                  value={exclusionItem ?? "pre-populated exclusion"}
                />
              </ListItem>
            </List>
            {/* <Button onClick={handleAddMoreExclusion} mt="4px">
              Add More
            </Button> */}
          </div>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-around">
          <Button type="submit" mt={"10px"} colorScheme="blue">
            Update Package
          </Button>
        </Box>
      </form>
    </Box>
  );
}
