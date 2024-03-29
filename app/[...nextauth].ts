import NextAuth, { NextAuthOptions } from 'next-auth'
import Providers from 'next-auth/providers'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
    // configure one or more authentication providers

    providers: [
        // add a provider
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              email: { label: "email", type: "email", placeholder: "johnsmith@gmail.com" },
              password: {  label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              const {email, password} = credentials as any 
              const res = await fetch("http://localhost:3000/api/login", {
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
              })
              const user = await res.json()

              if (res.ok && user){
                return user
              } else return null
            }
          })
    ],
    callbacks: {
        async jwt({token, user}){
            return {...token, ...user}
        },
        async session({session, token, user}){
            // send properties to client
            session.user = token 
            return session
        }
    },
    
}