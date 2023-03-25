import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import AddAdminForm from "./Forms/AddAdminForm";
import AddPackageForm from "./Forms/AddPackageForm";
import ChangeBannerForm from "./Forms/ChangeBannerForm";
import UpdatePackageForm from "./Forms/UpdatePackageForm";

export default function AdminPanel() {
  return (
    <>
      <Tabs>
        <TabList display={`flex`} justifyContent={`center`}>
          <Tab>Change Banner</Tab>
          <Tab>Add New Package</Tab>
          <Tab>Update Package</Tab>
          <Tab>Add Admin</Tab>
        </TabList>

        <Box width={`60%`}  m="auto">
          <TabPanels>
            <TabPanel>
              <ChangeBannerForm />
            </TabPanel>
            <TabPanel>
              <Box margin={`auto`}>
                <AddPackageForm />
              </Box>
            </TabPanel>
            <TabPanel>
              <UpdatePackageForm />
            </TabPanel>
            <TabPanel>
              <AddAdminForm />
            </TabPanel>
          </TabPanels>
        </Box>
      </Tabs>
    </>
  );
}
