import { User, UserRole, UserRoleConfig } from "@/types/types";
import { Avatar, Badge, Button, Table, Dialog } from "@radix-ui/themes";
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
            <EditUser name={user.name} userId={user.id} role={user.role} />
          </Dialog.Content>
        </Dialog.Root>
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
