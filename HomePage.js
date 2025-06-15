import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-purple-400 drop-shadow-lg">
        MASKEDAI
      </h1>
      <p className="text-lg md:text-2xl text-center max-w-xl mb-10">
        Şiveli yapay zekâ videolar oluştur. Ege'den Karadeniz'e, seslendir, konuştur ve videoya dönüştür.
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-2xl shadow-md transition">
          Metin Gir
        </button>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-2xl shadow-md transition">
          Şive Seç
        </button>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-2xl shadow-md transition">
          Karakter Seç
        </button>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-2xl shadow-md transition">
          Videoyu Oluştur
        </button>
      </div>
      <p className="mt-16 text-sm text-gray-400">
        © 2025 MaskedAI – Berkay & Elera tarafından geliştirildi ❤️
      </p>
    </div>
  );
}
