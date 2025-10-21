export default function Logo({ className = "w-10 h-10" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pmGrad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#2F855A" />
          <stop offset="100%" stopColor="#D69E2E" />
        </linearGradient>
      </defs>

      <rect x="6" y="6" width="36" height="30" rx="4" fill="url(#pmGrad)" opacity="0.95" />
      <path d="M12 18c0-4 6-6 12-6s12 2 12 6" stroke="rgba(255,255,255,0.95)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M14 26h20" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="18" cy="22" r="1.6" fill="rgba(255,255,255,0.95)" />
    </svg>
  )
}
