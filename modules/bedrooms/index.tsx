import { Box, Tabs, Text } from "@radix-ui/themes";
import TabListBedrooms from "./list/tab-list-bedrooms";
import TabCreateBedroom from "./create/tab-create-bedroom";
import { useSession } from "next-auth/react";

const BedroomsModule = () => {
  const { data } = useSession();

  if (!data) {
    return <Text>Debes iniciar sesión para ver este contenido</Text>;
  }

  return (
    <Tabs.Root defaultValue="listBedrooms">
      <Tabs.List>
        {data.user.role === "ADMIN" ? (
          <>
            <Tabs.Trigger value="listBedrooms">Habitaciones</Tabs.Trigger>
            <Tabs.Trigger value="createBedroom">Crear Habitación</Tabs.Trigger>
          </>
        ) : (
          <Tabs.Trigger value="listBedrooms">Habitaciones</Tabs.Trigger>
        )}
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
