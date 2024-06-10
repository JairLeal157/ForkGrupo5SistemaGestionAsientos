import { useGetHabitaciones } from "@/hooks/useHabitacion";
import { Button, Heading } from "@radix-ui/themes";
import HashLoader from "react-spinners/HashLoader";
import ListBedrooms from "./list-bedrooms";
import { ReloadIcon } from "@radix-ui/react-icons";

const TabListBedrooms = () => {
  const { data, error, loading } = useGetHabitaciones();

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

  return (
    <div>
      <Heading as="h2" size="6" mt="4" mb="6">
        Lista de habitaciones
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
      ) : data.habitaciones.length === 0 ? (
        <div className="bg-yellow-500 text-white p-4 rounded-md mb-4">
          No hay usuarios registrados
        </div>
      ) : (
        <ListBedrooms bedrooms={data.habitaciones} />
      )}
    </div>
  );
};

export default TabListBedrooms;
