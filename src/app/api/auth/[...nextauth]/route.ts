import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import { fetcher } from "@/src/utils/fetcher";

const LoginUser = async (
  credentials: Record<"email" | "password", string> | undefined
) => {
  const res = await fetcher("api/auth/login/", {
    method: "post",
    body: JSON.stringify(credentials),
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
  const data = await res.json();

  return data;
};

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Kaffo",
      credentials: {
        email: {
          label: "email",
          type: "email",
          name: "email",
        },
        password: {
          label: "password",
          name: "password",
          type: "password",
        },
      },
      async authorize(credentials): Promise<any> {
        const user = await LoginUser(credentials);

        if (user.hasOwnProperty("access")) {
          return { access_token: user?.access, ...user.user };
        } else {
          throw new Error(JSON.stringify({ error: user, status: false }));
        }
      },
    }),
  ],
  // database: process.env.DB_URI,
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    // on signin, jwt called before session callback, and user.id is from db!
    async jwt({ token, user }) {
      if (user) {
        token.access_token = user.access_token;
        token.user = user;
      }

      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.access_token = token.access_token;
        session.user = token.user;
      }
      return session;
    },
  },
  events: {},

  debug: false,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
