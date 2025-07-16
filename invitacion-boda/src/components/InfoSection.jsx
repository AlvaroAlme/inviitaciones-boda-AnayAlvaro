import { useRef, useEffect } from "react";
import RSVPForm from "./RSVPForm";
import FloralDivider from "./FloralDivider";

export default function InfoSection({ showForm, setShowForm, submitted, onSubmit }) {
  const rsvpRef = useRef(null);

  const LocationIcon = () => (
    <svg
      className="w-5 h-5 text-[#BB8588]"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1114.5 9 2.5 2.5 0 0112 11.5z" />
    </svg>
  );

  useEffect(() => {
    if (showForm) {
      rsvpRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [showForm]);

  return (
    <>
      <section className="bg-white py-16 px-4 max-w-4xl mx-auto text-center md:text-left rounded-md shadow-md">
        <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-12 border-t border-b border-gray-300 py-12">
          {/* Ceremonia */}
          <div className="flex-1 md:pr-6 flex flex-col items-center md:items-start">
            <h3 className="text-4xl font-serif-title font-bold text-[#797D62] mb-2 underline decoration-[#BB8588] underline-offset-4">
              Ceremonia
            </h3>
            <p className="mb-4 text-lg text-[#797D62]">Ayuntamiento de Murcia, 19:30 h.</p>
            <div className="flex flex-col items-center md:items-start gap-2 text-[#797D62]">
              <LocationIcon />
              <a
                href="http://bit.ly/4lPAJGb"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-[#D8A48F] transition-colors"
              >
                Ver ubicación
              </a>
            </div>
          </div>

          <div className="hidden md:block border-l border-gray-300 h-40 self-center"></div>

          {/* Banquete */}
          <div className="flex-1 md:pl-6 flex flex-col items-center md:items-start mt-10 md:mt-0">
            <h3 className="text-4xl font-serif-title font-bold text-[#797D62] mb-2 underline decoration-[#BB8588] underline-offset-4">
              Banquete
            </h3>
            <p className="mb-4 text-lg text-[#797D62]">Magna Garden · 20:30 h.</p>
            <div className="flex flex-col items-center md:items-start gap-2 text-[#797D62]">
              <LocationIcon />
              <a
                href="https://maps.google.com/?q=Magna+Garden"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-[#D8A48F] transition-colors"
              >
                Ver ubicación
              </a>
            </div>

            {/* Más separación arriba del botón */}
            {!showForm && (
              <button
                onClick={() => setShowForm(true)}
                className="mt-12 bg-sage hover:bg-sand text-cream px-12 py-5 rounded-full text-2xl shadow-lg transition font-semibold"
              >
                Confirma tu asistencia
              </button>
            )}
          </div>
        </div>
      </section>

      <FloralDivider />

      {/* Formulario solo si showForm es true */}
      {showForm && (
        <section
          ref={rsvpRef}
          className="max-w-3xl mx-auto bg-[#EFEBCE] p-10 mt-24 mb-16 rounded-md shadow-inner border border-[#d8a48f]/40 fade-in"
          id="rsvp-form"
        >
          {submitted ? (
            <p className="text-center text-2xl font-serif-title text-sage">
              ¡Gracias por confirmar tu asistencia! Nos vemos muy pronto.
            </p>
          ) : (
            <>
              <h3 className="text-3xl font-serif-title font-bold text-[#634E53] mb-6 text-center">
                Confirma tu asistencia
              </h3>
              <RSVPForm onSubmit={onSubmit} />
            </>
          )}
        </section>
      )}
    </>
  );
}
