import { AlertDialog, Button, Flex } from "@radix-ui/themes";

const DeleteUser = () => {
  return (
    <>
      <AlertDialog.Title>Eliminar usuario</AlertDialog.Title>
      <AlertDialog.Description size="2">
        ¿Estás seguro de que deseas eliminar este usuario?
      </AlertDialog.Description>

      <Flex gap="3" mt="4" justify="end">
        <AlertDialog.Cancel>
          <Button variant="soft" color="gray">
            Cancelar
          </Button>
        </AlertDialog.Cancel>
        <AlertDialog.Action>
          <Button variant="solid" color="red">
            Eliminar
          </Button>
        </AlertDialog.Action>
      </Flex>
    </>
  );
};

export default DeleteUser;
