import { useState } from "react";
import {
  Box,
  Input,
  Button,
  Textarea,
  Heading,
  List,
  ListItem,
} from "@chakra-ui/react";

export default function AddPackageForm() {
  const [newPackage, setNewPackage] = useState({});
  const [inclusionList, setInclusionList] = useState([]);
  const [exclusionList, setExclusionList] = useState([]);
  const [inclusionItem, setInclusionItem] = useState("");
  const [exclusionItem, setExclusionItem] = useState("");

  // const handleAddMoreExclusion = (e) => {
  //   e.preventDefault();
  //   const exclusionList = document.getElementById("exclusion-list");
  //   const newExclusion = document.createElement("li");
  //   newExclusion.classList.add("css-k008qs")
  //   newExclusion.style.display="flex"

  //   // creating a input element
  //   const input = document.createElement("input")
  //   input.placeholder = "Type any exclusion here"
  //   input.size = "md"
  //   input.name = ""
  //   input.classList.add("chakra-input css-1kp110w")
  //   input.m = "6px"
  //   newExclusion.appendChild(input)

  //   // creating add button
  //   const addButton = document.createElement("button")
  //   addButton.style.marginLeft = "6px"
  //   addButton.innerHTML = "Add"
  //   addButton.classList.add("chakra-button css-dkiuhs")
  //   newExclusion.appendChild(addButton)

  //   exclusionList.appendChild(newExclusion);
  // };
  // const handleAddMoreInclusion = (e) => {
  //   e.preventDefault();
  //   const inclusionList = document.getElementById("inclusion-list");
  //   const newInclusion = document.createElement("li");
  //   newInclusion.innerHTML = `<Input placeholder="Type any inclusion here" size="md" name="" class="chakra-input css-1kp110w" m="6px"/>`;
  //   // create a new react fragment and append it to the list
  //   inclusionList.appendChild(newInclusion);
  // };



  return (
    <Box m="auto">
      <Heading as="h2" size="xl" mb="10px" textAlign="center" mt="20px">
        Add Package
      </Heading>
      <form>
        <Input
          placeholder="Type package name"
          size="md"
          name="package_name"
          mb="6px"
          onChange={(e) =>
            setNewPackage({ ...newPackage, package_name: e.target.value })
          }
          value={newPackage.package_name ?? ""}
        />
        <Input
          placeholder="Type package overview"
          size="md"
          name="overview"
          mb="6px"
          onChange={(e) =>
            setNewPackage({ ...newPackage, overview: e.target.value })
          }
          value={newPackage.overview ?? ""}
        />
        <Box mb="6px">
          <Heading as="h3" size="lg" textAlign="center">
            Itineary
          </Heading>
          <div>
            <Heading as="h4" size="md" mb="6px">
              Day 1
            </Heading>
            <Textarea
              size="md"
              mb="10px"
              onChange={(e) =>
                setNewPackage({ ...newPackage, day1: e.target.value })
              }
              value={newPackage.day1 ?? ""}
            />
          </div>
          <div>
            <Heading as="h4" size="md" mb="6px">
              Day 2
            </Heading>
            <Textarea
              size="md"
              mb="10px"
              onChange={(e) =>
                setNewPackage({ ...newPackage, day2: e.target.value })
              }
              value={newPackage.day2 ?? ""}
            />
          </div>
          <div>
            <Heading as="h4" size="md" mb="6px">
              Day 3
            </Heading>
            <Textarea
              size="md"
              mb="10px"
              onChange={(e) =>
                setNewPackage({ ...newPackage, day3: e.target.value })
              }
              value={newPackage.day3 ?? ""}
            />
          </div>
        </Box>
        <Box>
          <Heading as="h3" size="lg" textAlign="center">
            Additional Info
          </Heading>
          <div >
            <Heading as="h3" size="lg">
              Inclusions
            </Heading>
            <List id="inclusion-list">
              <ListItem display="flex">
                <Input
                  placeholder="Type any inclusion here"
                  size="md"
                  name=""
                  onChange={(e) => {
                    setInclusionItem(e.target.value)
                  }}
                  value={inclusionItem}
                />
                <Button ml="6px" onClick={(e)=>{
                  e.preventDefault()
                  console.log("adding to the inclusion list")
                  if (inclusionItem == "") return 
                  setInclusionList([...inclusionList, inclusionItem])
                  console.log(inclusionList)
                  setInclusionItem("")
                }}>ADD</Button>
              </ListItem>
            </List>
          </div>
          <div>
            <Heading as="h3" size="lg">
              Exclusions
            </Heading>
            <List id="exclusion-list">
              <ListItem display="flex" ml="6px">
                <Input
                  placeholder="Type any exclusion here"
                  size="md"
                  name=""
                  onChange={(e) => {
                    setExclusionItem(e.target.value)
                  }}
                  value={exclusionItem}
                />
                <Button ml="6px" onClick={(e)=>{
                  e.preventDefault()
                  console.log("adding to the inclusion list")
                  if (exclusionItem == "") return 
                  setExclusionList([...exclusionList, exclusionItem])
                  console.log(exclusionList)
                  setExclusionItem("")
                }}>ADD</Button>
              </ListItem>
            </List>
          </div>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-around">
          <Button colorScheme="blue" mt={"10px"} onClick={
            async (e) => {
              e.preventDefault()
              // create a post request for adding a new package.
              const res = await fetch("https://localhost:8080/admin/packages", {method: "POST", body: JSON.stringify(newPackage)})
              if (res.status == 200) {
                alert("Package added successfully")
                // clear the form
                setNewPackage({})
              } else {
                alert("There was an error adding the package")
              }
             }
          }>
            Add Package
          </Button>
        </Box>
      </form>
    </Box>
  );
}
