import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export default function LogIn (){
    const session = useSession();
    console.log(session)
  
    const autenticated = () => {
      if (session.status === 'authenticated') {
        return true;
      } else session.status === 'unauthenticated';
      return false;
    };


    return(
        <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {!autenticated() ? (
                    <Link
                      key="Login"
                      href="/Login"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      onClick={() => handleSignUpClick()}
                    >
                      Iniciar sesión
                    </Link>
                  ) : (
                    <>
                      <p className="text-gray-300 rounded-md px-3 py-2 text-sm font-medium">
                        {`Bienvenido ${
                          session.data.user.name || session.data.user.username
                        }`}
                      </p>
                      {session.data.user.image && (
                        <Image
                          className="hidden h-10 w-auto lg:block"
                          src={session.data.user.image}
                          alt="image"
                          width={100}
                          height={100}
                        />
                      )}
                      <Link
                        key="LogOut"
                        href="/api/auth/signout"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      >
                        Cerrar Sesion
                      </Link>
                    </>
                  )}
                </div>
              </div>
    )
}