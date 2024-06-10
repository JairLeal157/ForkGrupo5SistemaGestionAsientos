import { ExitIcon } from "@radix-ui/react-icons";
import { Badge, Button } from "@radix-ui/themes";
import Link from "next/link";
import { sidebarData } from "./sidebar-data";
import { useRouter } from "next/router";
import UserBasicInfo from "@/modules/users/profile/user-basic-info";
import { signOut, useSession } from "next-auth/react";

const Sidebar = () => {
  const { data } = useSession();
  const router = useRouter();
  if (!data) return null;
  console.log("Sidebar -> ", sidebarData[data.user.role]);
  return (
    <aside className="h-full min-w-[300px] w-fit py-8 px-4 border border-l-2 flex flex-col gap-4">
      <UserBasicInfo />
      <nav className="flex-1 flex flex-col justify-between  border-t-[1px]">
        <ul className="borde flex flex-col gap-8 py-8 justify-between">
          {sidebarData[data.user.role].map((item, index) => (
            <Link
              key={index}
              className={`${router.pathname === item.href ? "bg-gray-200" : "bg-transparent"} flex gap-2 items-center py-2 px-4 w-full hover:bg-gray-100 rounded-md transition-all`}
              href={item.href}>
              {item.icon}
              {item.label}
            </Link>
          ))}
        </ul>
        <Button onClick={() => signOut({ callbackUrl: "/" })}>
          Salir <ExitIcon />
        </Button>
      </nav>
    </aside>
  );
};

export default Sidebar;
