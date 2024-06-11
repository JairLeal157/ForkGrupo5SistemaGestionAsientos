import { Button, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";

const Error403 = () => {
  return (
    <main className="grid place-items-center h-screen text-2xl font-bold">
      <div className="flex flex-col items-center gap-3">
        <Heading as="h1" size="9">
          Error 403
        </Heading>
        <Heading color="gray" size="3">
          No tienes permisos para acceder a esta ruta
        </Heading>
        <Button variant="ghost">
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </main>
  );
};

export default Error403;
