import { Habitacion } from "@/types/types";
import { useSession } from "next-auth/react";
import BedroomCard from "./bedroom-card";

interface ListBedroomsProps {
  bedrooms: Habitacion[];
}

const ListBedrooms = ({ bedrooms }: ListBedroomsProps) => {
  const { data } = useSession();
  if (!data) return null;
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bedrooms.map(({ costo_dia, libre, numero_habitacion }, index) => (
          <BedroomCard
            key={index}
            userId={data.user.id}
            bedroom={{
              costo_dia,
              libre,
              numero_habitacion,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ListBedrooms;
