import { Reserva } from "@/types/types";
import { CopyIcon } from "@radix-ui/react-icons";
import {
  AlertDialog,
  Badge,
  Button,
  Code,
  DataList,
  Flex,
  IconButton,
} from "@radix-ui/themes";
import AlertCancelBooking from "./alert-cancel";
import usePetition from "@/hooks/usePetition";

interface CardUserBookingProps {
  reserva: Reserva;
}

const CardUserBooking = ({ reserva }: CardUserBookingProps) => {
  return (
    <article className="border rounded-md p-4 shadow">
      <DataList.Root>
        <DataList.Item align="center">
          <DataList.Label minWidth="88px">Habitación</DataList.Label>
          <DataList.Value>
            <Badge color="iris" variant="soft" radius="full">
              {reserva.habitacion.numero_habitacion}
            </Badge>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">ID</DataList.Label>
          <DataList.Value>
            <Flex align="center" gap="2">
              <Code variant="ghost">{reserva.id}</Code>
              <IconButton
                size="1"
                aria-label="Copy value"
                color="gray"
                variant="ghost">
                <CopyIcon />
              </IconButton>
            </Flex>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">Costo/dia</DataList.Label>
          <DataList.Value>
            {reserva.habitacion.costo_dia.toLocaleString("es-CL", {
              style: "currency",
              currency: "COP",
            })}
          </DataList.Value>
        </DataList.Item>
        <AlertDialog.Root>
          <AlertDialog.Trigger>
            <Button color="red">Cancelar</Button>
          </AlertDialog.Trigger>
          <AlertDialog.Content maxWidth="450px">
            <AlertCancelBooking
              idBooking={reserva.id}
              habitacion={reserva.habitacion.numero_habitacion}
            />
          </AlertDialog.Content>
        </AlertDialog.Root>
      </DataList.Root>
    </article>
  );
};

export default CardUserBooking;
