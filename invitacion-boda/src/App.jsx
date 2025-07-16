import { useState, useRef } from "react";
import Carousel from "./components/Carousel";
import InfoSection from "./components/InfoSection";
import RSVPForm from "./components/RSVPForm";
import "./App.css";

export default function App() {
  const infoRef = useRef(null);
  const formRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const goToInfo = () => infoRef.current?.scrollIntoView({ behavior: "smooth" });
  const revealForm = () => {
    setShowForm(true);
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth" }), 300);
  };
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
          <button
            onClick={goToInfo}
            className="bg-sage hover:bg-sand text-cream px-12 py-5 rounded-full text-2xl shadow-lg transition font-semibold"
          >
            ¡Acompáñanos en nuestro dia!
          </button>
        </div>
      </section>

      {/* INFO + BUTTON */}
      <section
        ref={infoRef}
        className="w-full flex flex-col items-center py-32 px-6 gap-20 bg-white/90 backdrop-blur-sm"
      >
        <InfoSection />
        <button
          onClick={revealForm}
          className="bg-sage hover:bg-sand text-cream px-12 py-5 rounded-full text-2xl shadow-lg transition font-semibold mt-16"
        >
          ¡Rellena el formulario!
        </button>
      </section>

      {/* FORMULARIO */}
      {showForm && (
        <section
          ref={formRef}
          className="w-full flex flex-col items-center py-32 px-6 bg-white/90 backdrop-blur-sm"
        >
          <div className="w-full max-w-md mx-auto bg-cream p-12 rounded-lg shadow-xl">
            {submitted ? (
              <p className="text-center text-2xl font-serif-title text-sage">
                ¡Gracias por confirmar tu asistencia! Nos vemos muy pronto.
              </p>
            ) : (
              <>
                <h2 className="text-4xl font-serif-title font-bold text-center text-sage mb-12">
                  Confirma tu asistencia
                </h2>
                <RSVPForm onSubmit={handleSubmit} btnClass="bg-sage hover:bg-sand text-cream" />
              </>
            )}
          </div>
        </section>
      )}

      <footer className="w-full text-center py-10 text-sm text-sage">
        &copy; 2025 Ana & Álvaro · Con ❤️ y muchas ganas de celebrar.
      </footer>
    </div>
  );
}
