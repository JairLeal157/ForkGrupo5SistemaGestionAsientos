import { ExitIcon } from "@radix-ui/react-icons";
import { Badge, Button } from "@radix-ui/themes";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="h-full min-w-[300px] w-fit py-8 px-4 border border-l-2 flex flex-col gap-4">
      <article className="flex flex-col gap-2 items-center">
        <div className="bg-purple-500 w-20 h-20 rounded-full grid place-items-center text-2xl font-bold">
          JW
        </div>
        <h3>Jose Waldo</h3>
        <p>josferw@gmail.com</p>
        <Badge color="bronze">Administrador</Badge>
      </article>
      <nav className="flex-1 flex flex-col justify-between  border-t-[1px]">
        <ul className="borde flex flex-col gap-8 py-8 justify-between">
          <Link
            className="py-2 px-4 w-full bg-gray-100 hover:bg-gray-100 rounded-md transition-all"
            href="/">
            Dashboard
          </Link>
          <Link
            className="py-2 px-4 w-full bg-transparent hover:bg-gray-100 rounded-md transition-all"
            href="/">
            Reservaciones
          </Link>
          <Link
            className="py-2 px-4 w-full bg-transparent hover:bg-gray-100 rounded-md transition-all"
            href="/">
            Hoteles
          </Link>
          <Link
            className="py-2 px-4 w-full bg-transparent hover:bg-gray-100 rounded-md transition-all"
            href="/">
            Usuarios
          </Link>
        </ul>
        <Button>
          Salir <ExitIcon />
        </Button>
      </nav>
    </aside>
  );
};

export default Sidebar;
