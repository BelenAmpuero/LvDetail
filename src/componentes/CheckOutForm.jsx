function CheckoutForm() {
  return (
    <div className="w-full max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Datos del comprador
      </h2>

      <form className="flex flex-col gap-4">
        {/* Nombre */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Nombre completo
          </label>
          <input
            type="text"
            placeholder="Juan Pérez"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="juan@email.com"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
          />
        </div>

        {/* Teléfono */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Teléfono
          </label>
          <input
            type="tel"
            placeholder="+54 9 11 1234 5678"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
          />
        </div>

        {/* Dirección */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Dirección
          </label>
          <input
            type="text"
            placeholder="Calle y número"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
          />
        </div>

        {/* Ciudad + CP */}
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Ciudad"
            className="w-2/3 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="CP"
            className="w-1/3 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
          />
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="mt-6 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition font-medium placeholder-gray-400"
        >
          Confirmar compra
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;