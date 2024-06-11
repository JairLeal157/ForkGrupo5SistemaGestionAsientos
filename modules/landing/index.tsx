import { Avatar, Button, Flex, Heading, Text, Tooltip } from "@radix-ui/themes";
import { ArrowRightIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { sidebarData } from "@/components/sidebar/sidebar-data";
import { UserRole } from "@/types/types";
import { useEffect } from "react";

const LandingModule = () => {
  const { data } = useSession();

  useEffect(() => {
    if (data === undefined) return;
  }, [data]);

  const directTo = sidebarData[data?.user.role as UserRole]?.at(0)?.href;

  return (
    <main className="min-h-screen flex flex-col">
      <header className="border-b-[1px]">
        <Flex width="80%" mx="auto" py="4" justify="between" align="center">
          <Heading as="h1">HotelEase</Heading>
          <Link
            className="border-b-[2px] border-transparent hover:border-b-[2px] hover:border-[#3d0f00ab] transition-all"
            href={directTo || "/"}>
            Dashboard
          </Link>
          {data ? (
            <Avatar
              size="2"
              src={data.user?.image as string}
              fallback={data.user?.name?.at(0) as string}
              highContrast
            />
          ) : (
            <Button onClick={() => signIn("auth0")} color="gray" highContrast>
              <ArrowTopRightIcon />
              Iniciar Sesión
            </Button>
          )}
        </Flex>
      </header>
      <section className="flex-1 flex flex-col-reverse my-8 md:my-0 md:flex-row w-[80%] gap-8 mx-auto items-center justify-between">
        <div className="flex flex-col gap-4">
          <Heading size="2" className="uppercase" color="bronze">
            La Nueva Forma de Reservar y Administrar Hoteles
          </Heading>
          <Heading size="9" as="h2">
            Bienvenido a HotelEase
          </Heading>
          <Text wrap="pretty">
            Con HotelEase, tu experiencia de viaje comienza aquí. Simplificamos
            la búsqueda, reserva y gestión de tus estancias en los mejores
            hoteles alrededor del mundo. Descubre una nueva forma de viajar y
            disfrutar cada momento sin preocupaciones.
          </Text>
          <div className="w-fit">
            <Button color="gray" highContrast>
              <Link href="/dashboard/habitaciones">Reserva Ahora</Link>
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Habitación de un hotel"
          className="w-[100%] h-[300px] object-cover rounded-lg shadow-lg"
        />
      </section>
    </main>
  );
};

export default LandingModule;
