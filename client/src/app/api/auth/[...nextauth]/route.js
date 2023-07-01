import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios'
import bcrypt from 'bcryptjs'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        email: { label: "Email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        try {
          const { data } = await axios('http://localhost:3001/users');
      
          const user = data.users.find(user => user?.email === credentials?.email);
      
          if (user) {
            const passwordMatch = await bcrypt.compare(credentials?.password, user?.password);
      
            if (passwordMatch) {
              // Si las credenciales coinciden, se retorna el usuario
              return user;
            } else {
              // Si las contraseñas no coinciden, se retorna null para indicar un error de autenticación
              return null;
            }
          } else {
            // Si no se encuentra un usuario con el correo electrónico proporcionado, se retorna null
            return null;
          }
        } catch (error) {
          // Manejar cualquier error que ocurra durante la ejecución
          console.error(error);
          return null;
        }
    },
    
  })
    // Puedes agregar más proveedores aquí si lo deseas
  ],

  pages: {
    signIn: "/Login"

  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user
      return session;
    },
  },
})

export { handler as GET, handler as POST }