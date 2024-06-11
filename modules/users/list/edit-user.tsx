import StatePetition from "@/components/state-petition/state-petition";
import usePetition from "@/hooks/usePetition";
import { useChangeDataUser } from "@/hooks/useUser";
import { UserRole, UserRoleConfig } from "@/types/types";
import {
  Dialog,
  Text,
  TextField,
  Flex,
  Button,
  Select,
} from "@radix-ui/themes";
import { FormEvent, FormEventHandler, useState } from "react";

interface EditUserProps {
  userId: string;
  role: UserRole;
  name: string;
}

const EditUser = ({ name, role, userId }: EditUserProps) => {
  const [editUser, setEditUser] = useState<{
    name: string;
    role: UserRole;
  }>({
    name,
    role,
  });
  const { statePetition, setStatePetition } = usePetition();
  const { updateUser } = useChangeDataUser();

  const handleEditUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editUser.name === "") return;
    console.log(editUser);

    try {
      const response = await updateUser({
        variables: {
          userId,
          ...editUser,
        },
      });
      setStatePetition({
        status: "loading",
        message: "Guardando...",
      });
      if (response.errors) throw new Error("Error al editar el usuario");
      if (response.data) {
        setStatePetition({
          status: "success",
          message: "Usuario editado correctamente",
        });
      }
    } catch (error) {
      alert("Error al editar el usuario");
      setStatePetition({
        status: "error",
        message: "Error al editar el usuario",
      });
    }
  };
  return (
    <>
      <Dialog.Title>Editar Perfil</Dialog.Title>
      <Dialog.Description size="2" mb="4">
        Editar el perfil del usuario {name}
      </Dialog.Description>

      <form action="" onSubmit={(e) => handleEditUser(e)}>
        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Nombre
            </Text>
            <TextField.Root
              defaultValue={name}
              placeholder="Ingresa el nombre completo"
              onChange={(e) =>
                setEditUser((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Rol
            </Text>
            <Select.Root
              onValueChange={(e) => {
                setEditUser((prev) => ({ ...prev, role: e as UserRole }));
              }}
              size="2"
              defaultValue={UserRole[role]}>
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
            <Button variant="outline">Cerrar</Button>
          </Dialog.Close>
          <Button type="submit">Guardar</Button>
        </Flex>
      </form>
      <StatePetition statePetition={statePetition} />
    </>
  );
};

export default EditUser;
