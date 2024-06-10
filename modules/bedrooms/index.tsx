import { Box, Tabs, Text } from "@radix-ui/themes";
import TabListBedrooms from "./list/tab-list-bedrooms";
import TabCreateBedroom from "./create/tab-create-bedroom";

const BedroomsModule = () => {
  return (
    <Tabs.Root defaultValue="listBedrooms">
      <Tabs.List>
        <Tabs.Trigger value="listBedrooms">Habitaciones</Tabs.Trigger>
        <Tabs.Trigger value="createBedroom">Crear Habitación</Tabs.Trigger>
      </Tabs.List>

      <Box pt="3">
        <Tabs.Content value="listBedrooms">
          <TabListBedrooms />
        </Tabs.Content>

        <Tabs.Content value="createBedroom">
          <TabCreateBedroom />
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  );
};

export default BedroomsModule;
