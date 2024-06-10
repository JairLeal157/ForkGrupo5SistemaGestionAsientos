import { Reserva } from "@/types/types";
import CardUserBooking from "./card-user-booking";

interface ListUserBookingsProps {
  listaReservas: Reserva[];
}

const ListUserBookings = ({ listaReservas }: ListUserBookingsProps) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {listaReservas.map((reserva) => {
        return <CardUserBooking key={reserva.id} reserva={reserva} />;
      })}
    </section>
  );
};

export default ListUserBookings;
