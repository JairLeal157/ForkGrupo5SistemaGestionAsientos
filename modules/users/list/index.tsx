import { Heading } from "@radix-ui/themes";
import TableUsers from "./table-users";
import { useUsers } from "@/hooks/useUser";
import HashLoader from "react-spinners/HashLoader";

const ListUsersModule = () => {
  const { data, error, loading } = useUsers();

  console.log(data);

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
      <Heading as="h2" size="8" mb="6">
        Lista de usuarios
      </Heading>
      {error ? (
        <div className="bg-red-500 text-white p-4 rounded-md mb-4">
          {error.message}
        </div>
      ) : data === undefined ? (
        <div className="bg-red-500 text-white p-4 rounded-md mb-4">
          No se pudo cargar la lista de usuarios
        </div>
      ) : data.users.length === 0 ? (
        <div className="bg-yellow-500 text-white p-4 rounded-md mb-4">
          No hay usuarios registrados
        </div>
      ) : (
        <TableUsers listUsers={data.users} />
      )}
    </div>
  );
};

export default ListUsersModule;
