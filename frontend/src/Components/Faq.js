import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { Form } from "react-router-dom";

const DropDown = () => {
  return (
    <Box border="1px solid #A2A8AB" /* width={"100%"} */>
      <Accordion allowToggle>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    textColor={"#3A3A3A"}
                    fontWeight="semibold"
                  >
                    Try using our templates!
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="left">
                Let’s embody your beautiful ideas together, simplify the way you
                visualize your next big things.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

const Faq = () => {
  return (
    <>
      <Box
        display="flex"
        flexDir={"column"}
        gap="1.5vw"
        maxWidth={{lg: "20vw", md: "20vw", sm: "100%", base: "100%"}}
        minWidth = {{sm: "100%", base: "100%"}}
        justifyContent="center"
        flexWrap={"wrap"}
        alignContent="center"
      >
        <Box>
          <Text textColor={"#3A3A3A"} fontWeight="semibold" fontSize={"20px"}>
            FAQ
          </Text>
        </Box>
        <FormControl>
          <InputGroup>
            <InputRightElement
              pointerEvents="none"
              children={<AiOutlineSearch color="gray.800" />}
            />
            <Input placeholder="Search a question" variant="filled" />
          </InputGroup>
        </FormControl>
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
      </Box>
    </>
  );
};

export default Faq;
