import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from "next-auth/providers/facebook"
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios'
import bcrypt from 'bcryptjs'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'username' },
        email: { label: 'Email', type: 'text', placeholder: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        try {
          const { data } = await axios('http://localhost:3001/users');

          const user = data.users.find(
            (user) => user?.email === credentials?.email && user.provider === 'credentials'
          );

          if (user) {
            const passwordMatch = await bcrypt.compare(
              credentials?.password,
              user?.password
            );

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
          console.error(error.message);
          return null;
        }
      },
    }),
    // Puedes agregar más proveedores aquí si lo deseas
  ],

  pages: {
    signIn: '/Login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn(user, account, profile) {
      // Se verifica si el usuario ha iniciado sesión con Google o Facebook
      const { data } = await axios('http://localhost:3001/users')
      if (user.account?.provider === 'google') {
        // Se guarda el usuario en la base de datos
        const userDb = data.users?.find(userDb => userDb.email === user.user.email && userDb.provider === 'google')
        console.log(userDb);
        if(userDb?.provider === 'google') {
          return true
        }
        if(!userDb){
          const newUser = {
          provider: user.account.provider,
          image: user.user.image,
          email: user.user.email,
          password: '', // No se guarda la contraseña para los usuarios de Google y Facebook
          username: user.user.name,
        };

        await axios.post('http://localhost:3001/users', newUser);
        return true
        }
        
      }

      if (user.account?.provider === 'facebook') {
        // Se guarda el usuario en la base de datos
        const userDb = data.users?.find(userDb => userDb.email === user.user.email && userDb.provider === 'facebook')

        if(userDb?.provider === 'facebook') {
          return true
        }
        if(!userDb){
          const newUser = {
          provider: user.account.provider,
          image: user.user.image,
          email: user.user.email,
          password: '', // No se guarda la contraseña para los usuarios de Google y Facebook
          username: user.user.name,
        };

        await axios.post('http://localhost:3001/users', newUser);
        }
        
      }

      return true;
    },
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      if(session.user?.id.length === 21){
        const provider = 'google'
        const info = await axios('http://localhost:3001/users')
        const userNew = info.data.users.find(userDb => userDb.email === session.user.email && userDb.provider === provider)
        session.user = userNew
      }
      if(session.user?.id.length === 16){
        const provider = 'facebook'
        const info = await axios('http://localhost:3001/users')
        const userNew = info.data.users.find(userDb => userDb.email === session.user.email && userDb.provider === provider)
        session.user = userNew
      }
      if(!session.user?.image) session.user.image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVkI_FHVMm6hQ_h9uBT_SgaBNvtGePVuYxRmol4cPMwN89l3343X6w4Msap6vcZs-AsCs&usqp=CAU'

      return session;
    },
  },
});

export { handler as GET, handler as POST }