export default function FloralDivider() {
  return (
    <div className="flex justify-center my-12">
      <svg
        className="w-64 h-12"
        viewBox="0 0 256 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
      >
        {/* Línea base */}
        <line
          x1="0"
          y1="24"
          x2="256"
          y2="24"
          stroke="#BB8588"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="8 6"
        />

        {/* Flores simples (círculos) */}
        <circle cx="32" cy="24" r="6" fill="#BB8588" />
        <circle cx="128" cy="24" r="8" fill="#D8A48F" />
        <circle cx="224" cy="24" r="6" fill="#BB8588" />

        {/* Pétalos estilizados */}
        <path
          d="M32 18 L36 24 L32 30 L28 24 Z"
          fill="#D8A48F"
          opacity="0.7"
          transform="translate(-10,0)"
        />
        <path
          d="M128 16 L136 24 L128 32 L120 24 Z"
          fill="#BB8588"
          opacity="0.7"
        />
        <path
          d="M224 18 L228 24 L224 30 L220 24 Z"
          fill="#D8A48F"
          opacity="0.7"
          transform="translate(10,0)"
        />
      </svg>
    </div>
  );
}
