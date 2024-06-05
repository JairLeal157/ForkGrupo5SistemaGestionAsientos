interface SidebarData {
  label: string;
  icon: React.ReactNode;
  href: string;
}

import {
  BuildingOffice2Icon,
  ClipboardDocumentCheckIcon,
  Cog6ToothIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const sidebarData: SidebarData[] = [
  {
    label: "Reservaciones",
    icon: <ClipboardDocumentCheckIcon className="w-5 h-5" />,
    href: "/dashboard/reservations",
  },
  {
    label: "Hoteles",
    icon: <BuildingOffice2Icon className="w-5 h-5" />,
    href: "/dashboard/hotels",
  },
  {
    label: "Usuarios",
    icon: <UsersIcon className="w-5 h-5" />,
    href: "/dashboard/users",
  },
  {
    label: "Configurar Perfil",
    icon: <Cog6ToothIcon className="w-5 h-5" />,
    href: "/dashboard/profile",
  },
];
