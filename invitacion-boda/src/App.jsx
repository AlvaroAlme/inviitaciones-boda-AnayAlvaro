import { useState } from "react";
import Carousel from "./components/Carousel";
import InfoSection from "./components/InfoSection";
import "./App.css";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => setSubmitted(true);

  return (
    <div className="font-serif-body text-sage bg-cream min-h-screen">
      {/* LANDING */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-cream">
        <Carousel />
        <div className="z-10 text-center px-4">
          <h1 className="text-[9rem] md:text-[12rem] font-script text-rose drop-shadow-lg mb-2 leading-none select-none">
            Ana & Álvaro
          </h1>
          <p className="text-4xl font-serif-title text-camo drop-shadow-lg mb-10 select-none">
            03 · Octubre · 2025
          </p>
          {/* Botón que baja a la info */}
          <button
            onClick={() => {
              document
                .getElementById("info-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-sage hover:bg-sand text-cream px-12 py-5 rounded-full text-2xl shadow-lg transition font-semibold"
          >
            ¡Acompáñanos en nuestro día!
          </button>
        </div>
      </section>

      {/* INFO + FORMULARIO */}
      <section
        id="info-section"
        className="w-full flex flex-col items-center py-32 px-6 gap-20 bg-white/90 backdrop-blur-sm"
      >
        <InfoSection
          showForm={showForm}
          setShowForm={setShowForm}
          submitted={submitted}
          onSubmit={handleSubmit}
        />
      </section>

      <footer className="w-full text-center py-10 text-sm text-sage">
        &copy; 2025 Ana & Álvaro · Con ❤️ y muchas ganas de celebrar.
      </footer>
    </div>
  );
}
