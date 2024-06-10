import { Button, Heading, Text } from "@radix-ui/themes";
import HashLoader from "react-spinners/HashLoader";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useGetReservasByUser } from "@/hooks/useReservas";
import { useSession } from "next-auth/react";
import TableHistoryBooking from "./table-history-booking";

const TabHistoryUserBooking = () => {
  const { data: session } = useSession();

  if (!session) return null;

  console.log("Session", session.user.id);

  const { data, error, loading } = useGetReservasByUser(session.user.id);

  if (loading) {
    return (
      <div className="grid place-items-center min-h-[500px] w-full h-full">
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

  console.log("Mis reservas", data?.user.reservas);

  return (
    <div>
      <Heading as="h2" size="6" mt="4" mb="6">
        Mis reservas
        <Button
          mt="2"
          variant="ghost"
          ml="4"
          onClick={() => window.location.reload()}>
          <ReloadIcon />
        </Button>
      </Heading>
      {error ? (
        <div className="bg-red-500 text-white p-4 rounded-md mb-4">
          {error.message}
        </div>
      ) : data === undefined ? (
        <div className="bg-red-500 text-white p-4 rounded-md mb-4">
          No se pudo cargar la lista de usuarios
        </div>
      ) : data.user.reservas.length === 0 ? (
        <div className="bg-yellow-500 text-white p-4 rounded-md mb-4">
          No hay reservas hechas
        </div>
      ) : (
        <TableHistoryBooking listBooking={data.user.reservas} />
      )}
    </div>
  );
};

export default TabHistoryUserBooking;
