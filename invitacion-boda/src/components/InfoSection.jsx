export default function InfoSection() {
  return (
    <section className="bg-white py-16 px-4 max-w-4xl mx-auto text-center md:text-left">
      {/* Ceremonia */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-8 mb-16">
        <div className="mt-6 md:mt-0">
          <h3 className="text-2xl font-bold text-pink-600 mb-2">Ceremonia</h3>
          <p className="mb-2 text-lg">Ayuntamiento de Murcia, 19:30 h.</p>
          <a
            href="http://bit.ly/4lPAJGb"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            Ver ubicación
          </a>
        </div>
      </div>

      {/* Banquete */}
      <div className="flex flex-col md:flex-row-reverse md:items-center md:gap-8 mb-16">
        <div className="mt-6 md:mt-0">
          <h3 className="text-2xl font-bold text-pink-600 mb-2">Banquete</h3>
          <p className="mb-2 text-lg">Magna Garden · 20:30 h.</p>
          <a
            href="https://maps.google.com/?q=Magna+Garden"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            Ver ubicación
          </a>
        </div>
      </div>

      {/* Fiesta */}
      <div className="text-center pt-10 px-4">
        <h3 className="text-2xl font-bold text-pink-600 mb-4">¡Y mucha fiesta!</h3>
        <p className="text-lg max-w-xl mx-auto">
          Ven con tus mejores galas y prepárate para bailar hasta el amanecer.
        </p>
      </div>
    </section>
  );
}
