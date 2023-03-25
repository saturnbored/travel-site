import { useState } from "react";
import { Box, Button, Input, Heading } from "@chakra-ui/react";

export default function ChangeBannerForm() {
  const [bannerName, setBannerName] = useState("");
  return (
    <Box display={`flex`} flexDirection={`column`} m="auto">
      <Heading as="h2" size="xl" mb="10px" mt="20px" textAlign="center">
        Change Banner
      </Heading>
      <form>
        <Input placeholder="Type new banner name" size="md" name="banner" />
        <Box display="flex" flexDirection="row" justifyContent="space-around">
          <Button
            colorScheme="blue"
            mt={"10px"}
            onClick={async (e) => {
              try {
                e.preventDefault();
                console.log("changing banner");
                // making a post request for the new banner
                const res = await fetch("https://localhost:8080/admin/banner", {
                  method: "PATCH",
                  body: JSON.stringify({ banner: bannerName }),
                });
                if (res?.status == 200) {
                  console.log("banner changed successfully");
                  alert("Banner changed successfully");
                } else {
                  console.log("error changing banner");
                  alert("There was an error changing the banner");
                  console.log(res?.message);
                }
              } catch (e) {
                console.log(e);
              }
            }}
          >
            Change
          </Button>
        </Box>
      </form>
    </Box>
  );
}
