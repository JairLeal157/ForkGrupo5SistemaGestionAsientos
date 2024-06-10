import { EstadoReservaConfig, Reserva } from "@/types/types";
import { HomeModernIcon } from "@heroicons/react/24/outline";
import { Badge, Code, Table } from "@radix-ui/themes";

interface TableHistoryBookingProps {
  listTransactions: Reserva[];
}

const TableRow = ({ booking }: { booking: Reserva }) => {
  return (
    <Table.Row>
      <Table.RowHeaderCell>
        <Code variant="ghost">{booking.id}</Code>
      </Table.RowHeaderCell>
      <Table.Cell>
        <Badge color={EstadoReservaConfig[booking.estado].color}>
          {EstadoReservaConfig[booking.estado].label}
        </Badge>
      </Table.Cell>
      <Table.Cell>
        <Badge color="iris">
          <HomeModernIcon className="w-4 h-4" />
          {booking.habitacion.numero_habitacion}
        </Badge>
      </Table.Cell>
      <Table.Cell>
        {booking.usuario.name}
      </Table.Cell>
    </Table.Row>
  );
};

const TableTransactions = ({ listTransactions }: TableHistoryBookingProps) => {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Id</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Estado</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Habitación</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Usuario</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {listTransactions.map((booking, index) => (
          <TableRow key={index} booking={booking} />
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default TableTransactions;
