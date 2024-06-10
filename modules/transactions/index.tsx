import { useGetHabitaciones } from "@/hooks/useHabitacion";
import {
  useGetAllReservas,
  useGetReservasByHabitacion,
} from "@/hooks/useReservas";
import { Button, Heading, Select, Table } from "@radix-ui/themes";
import TableTransactions from "./table-transactions";
import { useEffect, useState } from "react";
import { Reserva } from "@/types/types";

const TransactionsModule = () => {
  const { data, loading, error } = useGetAllReservas();
  const { data: dataHab } = useGetHabitaciones();
  const [transactions, setTransactions] = useState<Reserva[]>([]);
  const [habitacion, setHabitacion] = useState<string>("all");
  const { data: dataHabitacion } = useGetReservasByHabitacion(
    Number(habitacion)
  );

  useEffect(() => {
    if (habitacion === "all") {
      if (data) {
        setTransactions(data.reservas);
      }
    }
    if (dataHabitacion) {
      setTransactions(dataHabitacion.habitacion.reservas);
    }
  }, [habitacion]);

  const handleHabitacion = (habitacion: string) => {
    if (habitacion === "all") return;
    setHabitacion(habitacion);
  };

  return (
    <div>
      <Heading as="h3" size="7">
        Lista de Transacciones
      </Heading>

      <section className="my-4">
        <Select.Root defaultValue="all">
          <Select.Trigger />
          <Select.Content position="popper">
            <Select.Group>
              <Select.Item value="all">Todas</Select.Item>
              {dataHab?.habitaciones.map((habitacion) => (
                <Select.Item
                  key={habitacion.numero_habitacion}
                  value={habitacion.numero_habitacion.toString()}>
                  Habitacion {habitacion.numero_habitacion}
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </section>

      <section>
        {loading ? (
          <p>Cargando...</p>
        ) : error ? (
          <p>Ha ocurrido un error</p>
        ) : transactions.length === 0 ? (
          <p>No hay transacciones</p>
        ) : (
          <TableTransactions listTransactions={transactions} />
        )}
      </section>
    </div>
  );
};

export default TransactionsModule;
