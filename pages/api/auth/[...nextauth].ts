import prisma from "@/config/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

const options: NextAuthOptions = {
  // Callback para agregar el campo role al objeto de sesión
  callbacks: {
    async session({ session, user }) {
      const usuario = await prisma.user.findUnique({
        where: {
          id: user.id,
        },
        select: {
          role: true,
        },
      });

      const role = usuario ? usuario.role : "USER";
      return {
        ...session,
        user: {
          ...user,
          role,
        },
      };
    },
  },

  providers: [
    Auth0Provider({
      wellKnown: `https://${process.env.AUTH0_DOMAIN}/`,
      issuer: process.env.AUTH0_DOMAIN,
      authorization: `https://${process.env.AUTH0_DOMAIN}/authorize?response_type=code&prompt=login`,
      clientId: `${process.env.AUTH0_CLIENT_ID}`,
      clientSecret: `${process.env.AUTH0_CLIENT_SECRET}`,
      async profile(profile) {
        // rol sea USER por defecto
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          role: profile.role ? profile.role : "USER",
        };
      },
    }),
  ],
  secret: process.env.AUTH0_CLIENT_SECRET,
  adapter: PrismaAdapter(prisma),
};

const handler = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

export default handler;
export { options };
