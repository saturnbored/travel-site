import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FaTelegramPlane } from "react-icons/fa";

const Flights = () => {
  return (
    <>
      <Card
      shadow={"md"}
      mx = {"20px"}
      mb = {"30px"}
      mt = "50px"
      >
        <CardHeader fontSize={"32px"} textAlign="left">Where are you flying?</CardHeader>
        <CardBody>
          <FormControl>
            <SimpleGrid templateColumns={{lg: "1fr 1fr 1fr 1fr", sm: "1fr 1fr"}} gap = "20px">
              <Select placeholder="From-To">
                <option>Lahore - Karachi</option>
              </Select>
              <Select placeholder="Trip">
                <option>Return</option>
              </Select>
              <Input type="datetime-local" />
              <Select placeholder="Passenger-Class">
                <option>1 Passenger, Economy</option>
              </Select>
            </SimpleGrid>
          </FormControl>
          <Box display = "flex" justifyContent={"end"} gap= "20px" mt = {"20px"} mr = "20px">
            <Text color={"gray"}>+ Add Promo Code</Text>
            <Button colorScheme={"telegram"}><FaTelegramPlane />-Show Flights</Button>
          </Box>
        </CardBody>
      </Card>
    </>
  );
};

export default Flights;
