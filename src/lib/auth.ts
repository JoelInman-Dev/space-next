import { ILoginCredentials } from "@/interfaces/ILoginCredentials";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as AuthService from "@/services/Auth-Service";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "login",
      credentials: {
        username: { label: "Your username or email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const payload: ILoginCredentials = {
          username: credentials?.username,
          password: credentials?.password || "",
        };

        // call the service passing credentials (username and password).
        // the returned value will be the authentication object from the auth server or an error
        const user = await AuthService.login(payload);

        if (user.error) {
          // throw an error to be handled by the callback
          throw new Error(user.errorMessage);
        }
        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (user) return true;

      return false;
    },
    async session({ session, token }) {
      if (session && session.user) {
        session.user.id = token.id;
        session.user.role = token.role ? token.role : "user";
        session.user.username = token.username;
        session.user.description = token.description;
        session.user.profileId = token.profileId;
        session.user.updated = token.updated;
      }

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        return { ...token, ...user };
      }
      return token;
    },
  },
  pages: {
    signIn: "/",
    //signOut: "/admin",
  },
  // use env variable in production
  secret: process.env.NEXTAUTH_SECRET,
};
