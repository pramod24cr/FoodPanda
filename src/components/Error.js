import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-10/12 md:w-8/12 lg:w-6/12">
        <h1 className="text-4xl font-bold text-red-600 text-center mb-4">Oops!!!</h1>
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Something went wrong!!</h2>
        <h3 className="text-xl text-gray-700 text-center mb-4">
          {err.status}: {err.statusText}
        </h3>
        <p className="text-center text-gray-600 mb-4">
          Please try again later or go back to the home page.
        </p>
        <div className="text-center">
          <a
            href="/"
            className="text-blue-600 hover:underline"
          >
            Go back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error;
