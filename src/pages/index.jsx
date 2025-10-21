import React, { useState } from "react";

export default function RifasNicolas() {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [name, setName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Nequi");

  const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

  const toggleNumber = (num) => {
    setSelectedNumbers((prev) =>
      prev.includes(num)
        ? prev.filter((n) => n !== num)
        : [...prev, num]
    );
  };

  const handleReserve = () => {
    alert(
      `Gracias ${name || "participante"} 🎉\nHas reservado los números: ${selectedNumbers.join(
        ", "
      )}\nMétodo de pago: ${paymentMethod}\n\nEnvía el comprobante a:\n📧 nicolasarevalo2006@gmail.com\n📱 Nequi: 3013862696\n📱 Daviplata: 3208773082`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-2">🎟️ Rifas Nicolás</h1>
      <h2 className="text-xl text-gray-300 mb-6">
        Rifa del millón 💰 | 100 números disponibles
      </h2>

      <img
        src="https://files.oaiusercontent.com/file-00000000f764620cb43fb27c2ce73e79"
        alt="Afiche Rifas Nicolás"
        className="rounded-2xl shadow-lg w-80 mb-6"
      />

      <div className="grid grid-cols-10 gap-2 max-w-md mb-6">
        {numbers.map((num) => (
          <button
            key={num}
            onClick={() => toggleNumber(num)}
            className={`p-2 rounded-md text-sm font-bold ${
              selectedNumbers.includes(num)
                ? "bg-green-500 text-black"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {num}
          </button>
        ))}
      </div>

      <input
        type="text"
        placeholder="Tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 mb-3 w-72 rounded text-black"
      />

      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
        className="p-2 mb-3 w-72 rounded text-black"
      >
        <option value="Nequi">Nequi</option>
        <option value="Daviplata">Daviplata</option>
      </select>

      <button
        onClick={handleReserve}
        className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-xl shadow-md hover:bg-yellow-300"
      >
        Reservar números
      </button>

      <p className="text-gray-400 text-sm mt-6 text-center">
        Sorteo público según la lotería • 15 de noviembre de 2025
      </p>
    </div>
  );
}
Página Rifas Nicolás lista
