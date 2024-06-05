import { UserRoleConfig } from "@/types/types";
import {
  Dialog,
  Text,
  TextField,
  Flex,
  Button,
  Select,
} from "@radix-ui/themes";

const EditUser = () => {
  return (
    <>
      <Dialog.Title>Editar Perfil</Dialog.Title>
      <Dialog.Description size="2" mb="4">
        Editar el perfil del usuario Jose Waldo
      </Dialog.Description>

      <Flex direction="column" gap="3">
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Nombre
          </Text>
          <TextField.Root
            defaultValue="Jose Waldo"
            placeholder="Ingresa el nombre completo"
          />
        </label>
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Correo
          </Text>
          <TextField.Root
            defaultValue="jose@example.com"
            placeholder="Ingresa su correo electrónico"
          />
        </label>
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Rol
          </Text>
          <Select.Root size="2" defaultValue="ADMIN">
            <Select.Trigger />
            <Select.Content position="popper">
              <Select.Item value="ADMIN">Administrador</Select.Item>
              <Select.Item value="USER">Usuario</Select.Item>
            </Select.Content>
          </Select.Root>
        </label>
      </Flex>

      <Flex gap="3" mt="4" justify="end">
        <Dialog.Close>
          <Button variant="soft" color="gray">
            Cancelar
          </Button>
        </Dialog.Close>
        <Dialog.Close>
          <Button>Guardar</Button>
        </Dialog.Close>
      </Flex>
    </>
  );
};

export default EditUser;
