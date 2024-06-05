import { useSession } from "next-auth/react";
import Sidebar from "../sidebar/sidebar";
import HashLoader from "react-spinners/HashLoader";
import { useEffect } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { data, status } = useSession();

  useEffect(() => {
    if (data === undefined) return;
    if (status === "unauthenticated") {
      window.location.href = "/auth/signin";
    }
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
