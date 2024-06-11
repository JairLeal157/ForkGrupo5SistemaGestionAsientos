/* eslint-disable import/no-default-export */

import Sidebar from "@/components/sidebar/sidebar";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { havePermission } from "../sidebar/sidebar-data";
import { UserRole } from "@/types/types";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { data, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (data === undefined) return;
    if (status === "unauthenticated") {
      window.location.href = "/auth/signin";
    }
    if (havePermission(data?.user.role as UserRole, router.pathname)) return;
    router.push("/403");
  }, [data, status]);

  if (status === "loading") {
    return (
      <div className="grid place-items-center w-full h-screen">
        <HashLoader
          color={"#000"}
          loading={status === "loading"}
          size={40}
          aria-label="Loading Spinner"
          data-testid="loader"
          cssOverride={{
            display: "block",
            margin: "0 auto",
            borderColor: "#000",
          }}
        />
      </div>
    );
  }

  return (
    <main className="flex h-screen">
      <Sidebar />
      <section className="min-h-screen overflow-y-auto w-full p-8">
        {children}
      </section>
    </main>
  );
};

export default Layout;
