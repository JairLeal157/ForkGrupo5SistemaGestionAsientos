export interface User {
  email: string;
  id: string;
  image: string;
  name: string;
  role: UserRole;
  reservas: Reserva[];
}

export interface Habitacion {
  numero_habitacion: number;
  costo_dia: number;
  libre: boolean;
  reservas: Reserva[];
}

export interface FormHabitacion {
  numero_habitacion: number;
  costo_dia: number;
  libre: boolean;
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

interface ReservaConfig {
  color: "red" | "green" | "blue";
  label: string;
}

export const EstadoReservaConfig: {
  [key in EstadoReserva]: ReservaConfig;
} = {
  [EstadoReserva.reservado]: {
    color: "red",
    label: "Reservado",
  },
  [EstadoReserva.checkin]: {
    color: "green",
    label: "Checkin",
  },
  [EstadoReserva.checkout]: {
    color: "blue",
    label: "Checkout",
  },
};

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
