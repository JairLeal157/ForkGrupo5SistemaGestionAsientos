import { UserRole } from "@/types/types";

const ROUTING: {
  [key in UserRole]: string[];
} = {
  [UserRole.ADMIN]: [
    "/dashboard/habitaciones",
    "/dashboard/reservas",
    "/dashboard/usuarios",
    "/dashboard/configuracion",
  ],
  [UserRole.USER]: [
    "/dashboard/habitaciones",
    "/dashboard/reservas",
    "/dashboard/configuracion",
  ],
};

export const redirect = (role: UserRole) => {
  return ROUTING[role][0];
};

export const isAllowed = (role: UserRole, pathname: string) => {
  return ROUTING[role].includes(pathname);
};
