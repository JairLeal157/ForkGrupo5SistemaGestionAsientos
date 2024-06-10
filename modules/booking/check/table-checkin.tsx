import { useCheckinReserva, useCheckoutReserva } from "@/hooks/useReservas";
import { EstadoReservaConfig, Reserva } from "@/types/types";
import { HomeModernIcon } from "@heroicons/react/24/outline";
import { Badge, Button, Code, Table } from "@radix-ui/themes";

interface TableHistoryBookingProps {
  listBookings: Reserva[];
}

const TableRow = ({ booking }: { booking: Reserva }) => {
  const { checkinReserva } = useCheckinReserva();
  const { checkoutReserva } = useCheckoutReserva();

  const handleCheckin = async () => {
    try {
      const res = await checkinReserva({
        variables: {
          reservaId: booking.id,
        },
      });
      if (res.errors)
        throw new Error("Ha ocurrido un error al hacer el checkin");
      if (res.data) {
        alert("Checkin realizado con éxito");
      }
    } catch (e) {
      alert("Ha ocurrido un error al hacer el checkin");
    }
  };

  const handleCheckout = async () => {
    try {
      const res = await checkoutReserva({
        variables: {
          reservaId: booking.id,
        },
      });
      if (res.errors)
        throw new Error("Ha ocurrido un error al hacer el checkout");
      if (res.data) {
        alert("Checkout realizado con éxito");
      }
    } catch (e) {
      alert("Ha ocurrido un error al hacer el checkout");
    }
  };

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
      <Table.Cell>{booking.usuario.name}</Table.Cell>
      <Table.Cell>
        <Button onClick={handleCheckin} size="1" color="yellow" variant="ghost">
          Checkin
        </Button>
        <Button onClick={handleCheckout} size="1" ml="2" variant="ghost">
          Checkout
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

const TableCheckinout = ({ listBookings }: TableHistoryBookingProps) => {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Id</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Estado</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Habitación</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Usuario</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Acciones</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {listBookings.map((booking, index) => (
          <TableRow key={index} booking={booking} />
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default TableCheckinout;
