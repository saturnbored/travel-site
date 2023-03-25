import { useState } from "react";
import { Box, Button, Input, Heading } from "@chakra-ui/react";

export default function AddAdminForm() {
  const [email, setEmail] = useState("");

  return (
    <Box display={`flex`} flexDirection={`column`}>
      <Heading as="h2" size="xl" mb="10px" mt="20px" textAlign="center">
        Add Admin
      </Heading>
      <form>
        <Input placeholder="medium size" size="md" name="email" />
        <Box display="flex" flexDirection="row" justifyContent="space-around">
          <Button
            colorScheme="blue"
            mt={"10px"}
            onClick={async (e) => {
              try {
                e.preventDefault();
                console.log(email);
                // make a post request to add admin
                const res = await fetch("https://localhost:8080/admin/new", {
                  method: "PATCH",
                  body: JSON.stringify({ email: email }),
                });
                if (res?.status == 200) {
                  console.log("admin added successfully");
                  alert("Admin added successfully");
                } else {
                  console.log("error adding admin");
                  alert("There was an error adding the admin");
                  console.log(res?.message);
                }
              } catch (e) {
                console.log(e)
              }
            }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          >
            Add
          </Button>
        </Box>
      </form>
    </Box>
  );
}
