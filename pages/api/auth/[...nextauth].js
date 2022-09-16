import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import { db } from "../../../firebase";
//import GithubProvider from "next-auth/providers/github"
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET_ID,
    }),
    // ...add more providers here
  ],
  adapter: FirebaseAdapter(db),
});
