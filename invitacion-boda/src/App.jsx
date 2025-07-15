// src/App.jsx
import { useState, useRef } from "react";
import Carousel from "./components/Carousel";
import InfoSection from "./components/InfoSection";
import RSVPForm from "./components/RSVPForm";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const scrollToForm = () => {
    setShowForm(true);              // muestra el formulario
    // espera un pequeño retraso para que el formulario se renderice antes del scroll
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center bg-pink-50 text-gray-800 overflow-x-hidden">
      {/* Hero — Carrusel de fondo */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <Carousel />

        {/* Contenido frontal */}
        <div className="z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg mb-2 select-none">
            Ana & Álvaro
          </h1>
          <p className="text-xl md:text-2xl text-white mb-6 select-none">
            03 · Octubre · 2025
          </p>

          {!showForm && (
            <button
              onClick={scrollToForm}
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-lg shadow-lg transition"
            >
              ¡Rellena el formulario!
            </button>
          )}
        </div>
      </section>

      {/* Información del evento */}
      <InfoSection />

      {/* Formulario de confirmación (solo visible tras pulsar el botón) */}
      {showForm && (
        <section
          ref={formRef}
          className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg my-12"
        >
          <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
            Confirma tu asistencia
          </h2>
          <RSVPForm />
        </section>
      )}

      <footer className="w-full text-center py-6 text-sm text-gray-500">
        &copy; 2025 Ana & Álvaro · Con ❤️ y muchas ganas de celebrar.
      </footer>
    </div>
  );
}
