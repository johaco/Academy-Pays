import { useNavigate } from "react-router-dom";

export default function PaymentSuccessModal() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-gray-800 text-white rounded-lg shadow-2xl p-6 w-[90%] max-w-md relative">
        
        {/* Icono de cerrar */}
        <button
          onClick={() => navigate("/")} // cerrar y mandar al inicio
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-200"
        >
          ✕
        </button>

        {/* Icono check */}
        <div className="flex justify-center mb-4">
          <div className="bg-green-600 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 111.414-1.414L8.5 11.086l6.793-6.793a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Mensaje */}
        <p className="text-center text-lg font-medium mb-6">
          Payment successful! 🎉
        </p>

        {/* Botón continuar */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/dashboard")} // 👈 cambia la ruta aquí
            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md font-semibold text-white transition"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
