export interface User {
  email: string;
  id: string;
  image: string;
  name: string;
  role: UserRole;
}

export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
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
