export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex h-11 w-11 shrink-0 items-center justify-center">
        <svg
          viewBox="0 0 48 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          aria-hidden="true"
        >
          <path
            d="M24 2L44 10V32C44 42 35 50 24 54C13 50 4 42 4 32V10L24 2Z"
            stroke="url(#goldGrad)"
            strokeWidth="2.5"
            fill="#141414"
          />
          <path
            d="M24 48C24 48 20 44 20 40C20 36 22 34 24 32C26 34 28 36 28 40C28 44 24 48 24 48Z"
            fill="#d4a017"
          />
          <ellipse cx="18" cy="26" rx="2.5" ry="3" fill="#ffd200" />
          <ellipse cx="30" cy="26" rx="2.5" ry="3" fill="#ffd200" />
          <path
            d="M16 32C18 36 22 38 24 38C26 38 30 36 32 32"
            stroke="#888"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="goldGrad" x1="4" y1="2" x2="44" y2="54">
              <stop stopColor="#d4a017" />
              <stop offset="0.5" stopColor="#ffd200" />
              <stop offset="1" stopColor="#d4a017" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="leading-tight">
        <span className="block text-lg font-extrabold tracking-[0.15em] text-white">
          JAGU<span className="text-jaguar-gold-bright">A</span>R
        </span>
        <span className="block text-[0.55rem] font-medium tracking-[0.25em] text-jaguar-gold">
          SECURITY SERVICES LTD
        </span>
      </div>
    </div>
  );
}
