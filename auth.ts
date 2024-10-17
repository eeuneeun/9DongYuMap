import NextAuth from "next-auth";
import { ZodError } from "zod";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./app/_validates/auth";
// Your own logic for dealing with plaintext password strings; be careful!
// import { saltAndHashPassword } from "@/utils/password";
import { getUserFromDb } from "./app/utils/db";

export const { handlers, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        // try {
        let user = null;

        // const { email, password } = await signInSchema.parseAsync(credentials);
        const email:string = credentials.email
        const password:string = credentials.password

        // logic to salt and hash password
        // const pwHash = saltAndHashPassword(password);

        // logic to verify if the user exists
        // @ts-ignore
        user = await getUserFromDb({ credentials.email, credentials.password});

        if (!user) {
          throw new Error("User not found.");
        }

        // return JSON object with the user data
        return user;
        // } catch (error) {
        //   if (error instanceof ZodError) {
        //     // Return `null` to indicate that the credentials are invalid
        //     return null;
        //   }
        // }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true;
      // if (isAllowedToSignIn) {
      //   return true;
      // } else {
      //   // Return false to display a default error message
      //   return false;
      //   // Or you can return a URL to redirect to:
      //   // return '/unauthorized'
      // }
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
});
