import { useGetAllReservas } from "@/hooks/useReservas";
import { Heading } from "@radix-ui/themes";
import HashLoader from "react-spinners/HashLoader";
import TableCheckinout from "./table-checkin";

const CheckinoutModule = () => {
  const { data, error, loading } = useGetAllReservas();

  if (loading) {
    return (
      <div className="grid place-items-center w-full h-full">
        <HashLoader
          color={"#000"}
          loading={loading}
          size={40}
          aria-label="Loading Spinner"
          data-testid="loader"
          cssOverride={{
            display: "block",
            margin: "0 auto",
            borderColor: "#000",
          }}
        />
      </div>
    );
  }

  return (
    <div>
      <Heading>Chechin & Checkout</Heading>
      <section className="my-4">
        {error ? (
          <p>Ha ocurrido un error al cargar las reservas</p>
        ) : !data ? (
          <p>No hay reservas</p>
        ) : !data.reservas ? (
          <p>No hay reservas</p>
        ) : (
          <TableCheckinout listBookings={data.reservas} />
        )}
      </section>
    </div>
  );
};

export default CheckinoutModule;
