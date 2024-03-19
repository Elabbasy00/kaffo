import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User extends DefaultUser {
    id: string;
    email: string;
    is_admin: boolean;
    is_superuser: boolean;
    first_name: string;
    last_name: string;
    username: string;
    access_token: string;
  }
  interface Session extends DefaultSession {
    access_token: string;
    user?: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    access_token: string;
    user: User;
  }
}
