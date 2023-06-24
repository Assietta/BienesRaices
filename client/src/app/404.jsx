import { ErrorBoundary } from 'next/error';
import { useRouter } from 'next/router';
import Error from 'next/error';

const CustomErrorPage = () => {
    const router = useRouter();
  
    return (
      <ErrorBoundary
        statusCode={404} // Código de error a manejar
        onError={() => router.push('/404')} // Redirigir a otra página de error si hay un error en el manejo
      >
        <Error statusCode={404} /> // Componente Error para renderizar la página de error
      </ErrorBoundary>
    );
  };
  
  export default CustomErrorPage;
