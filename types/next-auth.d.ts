import NextAuth from "next-auth";
import { UserRole } from "./types";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      email: string;
      emailVerified: null;
      id: string;
      image: string | null;
      name: string | null;
      role: UserRole;
    };
  }
}
