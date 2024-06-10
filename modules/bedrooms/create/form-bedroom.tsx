import StatePetition from "@/components/state-petition/state-petition";
import { useCreateHabitacion } from "@/hooks/useHabitacion";
import usePetition from "@/hooks/usePetition";
import { FormHabitacion } from "@/types/types";
import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";

const FormCreateBedroom = () => {
  const { createHabitacion } = useCreateHabitacion();
  const { setStatePetition, statePetition } = usePetition();
  const { register, handleSubmit, formState, reset } = useForm<FormHabitacion>({
    defaultValues: {
      numero_habitacion: 0,
      costo_dia: 1000,
      libre: true,
    },
  });

  const handleFormSubmit = async (data: FormHabitacion) => {
    try {
      setStatePetition({ status: "loading", message: "Creando habitación" });
      const response = await createHabitacion({
        variables: {
          numeroHabitacion: Number(data.numero_habitacion),
          costoDia: Number(data.costo_dia),
          libre: data.libre,
        },
      });
      if (!response.data)
        throw new Error("No se ha podido crear la habitación");
      const habitacion = response.data?.createHabitacion.numero_habitacion;
      setStatePetition({
        status: "success",
        message: `La habitación ${habitacion} ha sido creada correctamente`,
      });
      reset();
    } catch (error) {
      setStatePetition({
        status: "error",
        message: "Ha ocurrido un error al crear la habitación",
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="max-w-[500px]">
        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Número
            </Text>
            <TextField.Root
              placeholder="Ingresa el número de la habitación"
              type="text"
              color={formState.errors.numero_habitacion ? "red" : "gray"}
              {...register("numero_habitacion", {
                required: {
                  value: true,
                  message: "El número de habitación es requerido",
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message:
                    "El número de habitación solo puede contener números",
                },
              })}
            />
            {formState.errors.numero_habitacion && (
              <Text size="1" color="red">
                {formState.errors.numero_habitacion.message}
              </Text>
            )}
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Costo por día
            </Text>
            <TextField.Root
              placeholder="Ingresa el costo por día"
              type="number"
              color={formState.errors.costo_dia ? "red" : "gray"}
              {...register("costo_dia", {
                required: {
                  value: true,
                  message: "El costo por día es requerido",
                },
                min: {
                  value: 1000,
                  message: "El costo por día debe ser mayor a 1000",
                },
              })}
            />
          </label>
          <Button type="submit">Crear</Button>
        </Flex>
      </form>
      <StatePetition statePetition={statePetition} />
    </>
  );
};

export default FormCreateBedroom;
