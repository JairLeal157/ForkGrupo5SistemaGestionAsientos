import { User, UserRole, UserRoleConfig } from "@/types/types";
import {
  Avatar,
  Badge,
  Button,
  Table,
  AlertDialog,
  Flex,
  Dialog,
} from "@radix-ui/themes";
import DeleteUser from "./delete-user";
import EditUser from "./edit-user";

interface TableRowProps {
  user: User;
}
interface TableUsersProps {
  listUsers: User[];
}

const TableRow = ({ user }: TableRowProps) => {
  const { color, label } = UserRoleConfig[user.role];
  return (
    <Table.Row>
      <Table.Cell>
        <Avatar
          size="1"
          src={user.image as string}
          fallback={user.name.at(0) as string}
          highContrast
        />
      </Table.Cell>
      <Table.RowHeaderCell>{user.name}</Table.RowHeaderCell>
      <Table.Cell>
        <Badge color={color}>{label}</Badge>
      </Table.Cell>
      <Table.Cell>{user.email}</Table.Cell>
      <Table.Cell>
        <Dialog.Root>
          <Dialog.Trigger>
            <Button color="orange" variant="ghost" size="1">
              Editar
            </Button>
          </Dialog.Trigger>
          <Dialog.Content maxWidth="450px">
            <EditUser />
          </Dialog.Content>
        </Dialog.Root>

        <AlertDialog.Root>
          <AlertDialog.Trigger>
            <Button color="red" variant="ghost" size="1" ml="4">
              Eliminar
            </Button>
          </AlertDialog.Trigger>
          <AlertDialog.Content maxWidth="450px">
            <DeleteUser />
          </AlertDialog.Content>
        </AlertDialog.Root>
      </Table.Cell>
    </Table.Row>
  );
};

const TableUsers = ({ listUsers }: TableUsersProps) => {
  return (
    <Table.Root variant="ghost">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Avatar</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Nombre Completo</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Rol</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Acciones</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {listUsers.map((user) => (
          <TableRow key={user.id} user={user} />
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default TableUsers;
