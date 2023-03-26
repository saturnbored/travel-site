import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import AddAdminForm from "./Forms/AddAdminForm";
import AddPackageForm from "./Forms/AddPackageForm";
import ChangeBannerForm from "./Forms/ChangeBannerForm";
import TeamMembers from "./TeamMembers";
import UpdateBanner from "./UpdateBanner";

export default function AdminPanel() {
  return (
    <>
      <Tabs>
        <TabList display={`flex`} justifyContent={`center`}>
          <Tab>Change Banner</Tab>

          <Tab>Add Admin</Tab>
        </TabList>

        <Box width={`60%`} m="auto">
          <TabPanels>
            <TabPanel>
              <UpdateBanner />
            </TabPanel>

            <TabPanel>
              <TeamMembers />
            </TabPanel>
          </TabPanels>
        </Box>
      </Tabs>
    </>
  );
}
