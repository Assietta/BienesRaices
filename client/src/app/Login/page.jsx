'use client';
import Link from 'next/link';
import { use, useState } from 'react';
import { validateForm } from './validates';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const session = useSession();

  if (session.status === 'authenticated') router.push('/');

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setFormData({
      email: '',
      password: '',
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const res = await signIn('credentials', { ...formData, redirect: false})
      console.log(res);
      if(res?.error) setErrors({email : 'Correo o contraseña invalidos'})
      clearForm();
    }
  };

  return (
    <div className=" min-h-screen flex items-center justify-center bg-center py-12 px-4 sm:px-6 lg:px-8 bg-black bg-no-repeat bg-cover ">
      <div className="flex flex-col items-center justify-center mx-auto md:max-w-35rem h-50 space-y-8 p-12 bg-white rounded-xl shadow-lg z-10">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Iniciar sesión
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className=" max-w-xl gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative">
              <dt className="text-base font-semibold leading-7 text-gray-900"></dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                <form onSubmit={handleSubmit}>
                  {/* input mail */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      {" "}
                      Correo electrónico <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="nombre@dominio.com"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="text"
                      name="email"
                      id="integration_shop_name"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && (
                      <p className="text-red-600">{errors.email}</p>
                    )}
                  </div>

                  {/* input password */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      {" "}
                      Contraseña <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="ingrese su Password"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    {errors.password && (
                      <p className="text-red-600">{errors.password}</p>
                    )}
                  </div>

                  {/* botones */}
                  <button
                    className="mx-auto block mb-4 md:mb-1 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                    type="submit"
                  >
                    Ingresar
                  </button>

                  <p style={{ fontSize: "11px", textAlign: "center" }}></p>
                  <p className="text-center mt-2">o ingresa con</p>
                </form>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => signIn("google")}
                    className="flex items-center justify-center w-11 h-11 shadow-sm rounded-full hover:shadow-lg"
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcSUWGIs3vTxgqa_qQ-0etVCRtIvpxtSI9Xg&usqp=CAU"
                      alt="Google"
                      className="rounded-full w-9 h-9"
                    />
                  </button>

                  <button
                    onClick={() => signIn("github")}
                    className="flex items-center justify-center bg-gray-800 text-white w-11 h-11 rounded-full hover:bg-gray-900"
                  >
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.24.82.73 1.23 1.9.88 2.37.67.07-.53.28-.88.51-1.08-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.58.82-2.14-.08-.2-.36-1.01.08-2.1 0 0 .67-.21 2.2.81.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.02 2.2-.81 2.2-.81.44 1.09.17 1.9.08 2.1.51.56.82 1.27.82 2.14 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.14.46.55.38A8.02 8.02 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                      />
                    </svg>
                  </button>
                </div>
                <p style={{ fontSize: "11px", textAlign: "center" }}>
                  ¿No tienes cuenta?
                </p>

                <Link href={"/SignIn"}>
                  <button className="mx-auto block mb-2 md:mb-0 bg-blue-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-500">
                    Registrarse
                  </button>
                </Link>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
