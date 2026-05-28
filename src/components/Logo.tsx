export function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Learn With Smile">
      <defs>
        <linearGradient id="lws-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0E7C5A"/>
          <stop offset="55%" stopColor="#0A5B43"/>
          <stop offset="100%" stopColor="#1A2E20"/>
        </linearGradient>
        <linearGradient id="lws-accent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F5B700"/>
          <stop offset="100%" stopColor="#FFD96B"/>
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="50" height="50" rx="14" fill="url(#lws-bg)"/>
      <text x="28" y="33" textAnchor="middle" fontFamily="Sora, system-ui, sans-serif" fontSize="17" fontWeight="800" fill="#FFFFFF" letterSpacing="-0.5">LWS</text>
      <path d="M16 38 Q28 47 40 38" stroke="url(#lws-accent)" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <circle cx="46" cy="10" r="3" fill="#F5B700"/>
      <circle cx="10" cy="46" r="2" fill="#FF6B5B"/>
      <circle cx="48" cy="44" r="1.6" fill="#5B5BD6"/>
    </svg>
  );
}
