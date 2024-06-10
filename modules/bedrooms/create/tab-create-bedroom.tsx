import { Box, Heading } from "@radix-ui/themes";
import FormCreateBedroom from "./form-bedroom";

const TabCreateBedroom = () => {
  return (
    <div>
      <Heading as="h2" size="6" mt="4" mb="6">
        Crear habitaciones
      </Heading>
      <Box>
        <FormCreateBedroom />
      </Box>
    </div>
  );
};

export default TabCreateBedroom;
