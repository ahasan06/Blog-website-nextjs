import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';
import { dbConnect } from '@/lib/dbConnect';
import UserModel from '@/models/User';
import { NextResponse } from 'next/server';


export const authOptions = {

    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "credentials",
            credentials: {
                identifier: { label: "Email or Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                await dbConnect();
                const user = await UserModel.findOne({ email: credentials.identifier });
                if (!user) {
                    throw new Error("No user found with this email or username");
                }
            
                const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
                if (isPasswordCorrect) {
                    // Return a plain object instead of using NextResponse.json
                    return {
                        id: user._id.toString(),
                        name: user.name,
                        email: user.email,
                    };
                } else {
                    throw new Error("Incorrect password");
                }
            }
            
        })

    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token._id = user.id;
                token.name = user.name;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user._id = token._id;
                session.user.name = token.name;
                session.user.email = token.email;
            }
            return session;
        }
    },
    
    pages: {
        signIn: '/Home',
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET || "fallback-secret-key",

}

export default NextAuth(authOptions);

