import error_img from "/src/assets/crying-emoji-svgrepo-com.svg";

function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 text-center">
      <img src={error_img} alt="No Results" className="w-56 h-56 mb-4" />
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-red-500">
        Error 404
      </h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

export default ErrorPage;
