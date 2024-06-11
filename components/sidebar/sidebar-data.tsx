interface SidebarData {
  label: string;
  icon: React.ReactNode;
  href: string;
}

import { UserRole } from "@/types/types";
import {
  BuildingOffice2Icon,
  ClipboardDocumentCheckIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const sidebarData: { [key in UserRole]: SidebarData[] } = {
  [UserRole.ADMIN]: [
    {
      label: "Habitaciones",
      icon: <BuildingOffice2Icon className="w-5 h-5" />,
      href: "/dashboard/habitaciones",
    },
    {
      label: "Reservas",
      icon: <ClipboardDocumentCheckIcon className="w-5 h-5" />,
      href: "/dashboard/reservas",
    },
    {
      label: "Transacciones",
      icon: <ClipboardDocumentCheckIcon className="w-5 h-5" />,
      href: "/dashboard/transacciones",
    },
    {
      label: "Check-in / Check-out",
      icon: <ClipboardDocumentCheckIcon className="w-5 h-5" />,
      href: "/dashboard/reservas/checkinout",
    },
    {
      label: "Usuarios",
      icon: <UsersIcon className="w-5 h-5" />,
      href: "/dashboard/usuarios",
    },
  ],
  [UserRole.USER]: [
    {
      label: "Habitaciones",
      icon: <BuildingOffice2Icon className="w-5 h-5" />,
      href: "/dashboard/habitaciones",
    },
    {
      label: "Reservas",
      icon: <ClipboardDocumentCheckIcon className="w-5 h-5" />,
      href: "/dashboard/reservas",
    },
  ],
};

export const havePermission = (role: UserRole, href: string) => {
  return sidebarData[role].some((item) => item.href === href);
};
