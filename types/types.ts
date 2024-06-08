
export interface User {
  email: string;
  id: string;
  image: string;
  name: string;
  role: UserRole;
  reservas: Reserva[];
}

export interface Habitacion {
  numero_habitacion: string;
  costo_dia: number;
  libre: boolean;
  price: number;
  reservas: Reserva[];
}

export interface Reserva {
  id: string;
  habitacion: Habitacion;
  numero_habitacion: number;
  usuario: User;
  estado: EstadoReserva; 
}
export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
}

export enum EstadoReserva {
  reservado = "reservado",
  checkin = "checkin",
  checkout = "checkout",
}

interface RoleConfig {
  color: "red" | "green";
  label: string;
}

export const UserRoleConfig: {
  [key in UserRole]: RoleConfig;
} = {
  [UserRole.ADMIN]: {
    color: "red",
    label: "Administrador",
  },
  [UserRole.USER]: {
    color: "green",
    label: "Usuario",
  },
};
