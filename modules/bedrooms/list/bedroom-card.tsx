import StatePetition from "@/components/state-petition/state-petition";
import usePetition from "@/hooks/usePetition";
import { useCreateReserva } from "@/hooks/useReservas";
import {
  Box,
  Card,
  Inset,
  Text,
  Strong,
  Heading,
  Badge,
  Flex,
  Button,
} from "@radix-ui/themes";

interface BedroomCardProps {
  userId: string;
  bedroom: {
    numero_habitacion: number;
    costo_dia: Number;
    libre: boolean;
  };
}

const BedroomCard = ({ userId, bedroom }: BedroomCardProps) => {
  const { createReserva } = useCreateReserva();
  const { statePetition, setStatePetition } = usePetition();

  console.log({
    userId,
    bedroom,
  });

  const handleReservar = async () => {
    try {
      setStatePetition({ status: "loading", message: "Creando habitación" });
      const response = await createReserva({
        variables: {
          usuarioId: userId,
          numeroHabitacion: bedroom.numero_habitacion,
        },
      });
      if (!response.data)
        throw new Error("No se ha podido crear la habitación");
      console.log(response.data);
      // const reserva = response.data?.createHabitacion.numero_habitacion;
      setStatePetition({
        status: "success",
        message: `La reserva ha sido creada correctamente`,
      });
    } catch (error) {
      setStatePetition({
        status: "error",
        message: "Ha ocurrido un error al crear la habitación",
      });
    }
  };

  return (
    <>
      <Box minWidth="240px">
        <Card size="2">
          <Inset clip="padding-box" side="top" pb="current">
            <img
              src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Bold typography"
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: 140,
                backgroundColor: "var(--gray-5)",
              }}
            />
          </Inset>
          <Flex direction="column" gap="2">
            <Heading as="h3" size="4">
              Habitación {bedroom.numero_habitacion}
            </Heading>
            <Badge
              className="w-fit"
              color={`${bedroom.libre ? "green" : "red"}`}>
              {bedroom.libre ? "Disponible" : "Ocupada"}
            </Badge>
            <Text size="3">
              <Strong>
                {new Intl.NumberFormat("es-CL", {
                  style: "currency",
                  currency: "COP",
                }).format(Number(bedroom.costo_dia))}
              </Strong>{" "}
              / día
            </Text>
            <Button
              onClick={handleReservar}
              color="green"
              disabled={Boolean(!bedroom.libre)}>
              Reservar
            </Button>
          </Flex>
        </Card>
      </Box>
      <StatePetition statePetition={statePetition} />
    </>
  );
};

export default BedroomCard;
