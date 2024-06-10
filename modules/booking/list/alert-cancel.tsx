import StatePetition from "@/components/state-petition/state-petition";
import usePetition from "@/hooks/usePetition";
import { useDeleteReserva } from "@/hooks/useReservas";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";

const AlertCancelBooking = ({
  habitacion,
  idBooking,
}: {
  habitacion: number;
  idBooking: string;
}) => {
  const { eliminarReserva } = useDeleteReserva();
  const { setStatePetition, statePetition } = usePetition();
  const handleCancelBooking = async () => {
    try {
      const response = await eliminarReserva({
        variables: {
          reservaId: idBooking,
        },
      });
      if (!response.data)
        throw new Error("No se ha podido cancelar la reserva");
      setStatePetition({
        status: "success",
        message: "La reserva ha sido cancelada correctamente",
      });
      window.location.reload();
    } catch (error) {
      setStatePetition({
        status: "error",
        message: "Ha ocurrido un error al cancelar la reserva",
      });
    }
  };
  return (
    <>
      <AlertDialog.Title>Cancelar Reserva</AlertDialog.Title>
      <AlertDialog.Description size="2">
        ¿Está seguro de cancelar la reserva de la habitación{" "}
        <strong>{habitacion}</strong>?
      </AlertDialog.Description>

      <Flex gap="3" mt="4" justify="end">
        <AlertDialog.Cancel>
          <Button variant="soft" color="gray">
            Denegar
          </Button>
        </AlertDialog.Cancel>
        <AlertDialog.Action>
          <Button onClick={handleCancelBooking} variant="solid" color="red">
            Cancelar Reserva
          </Button>
        </AlertDialog.Action>
      </Flex>

      <StatePetition statePetition={statePetition} />
    </>
  );
};

export default AlertCancelBooking;
