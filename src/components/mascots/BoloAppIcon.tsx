/**
 * The Bolo app icon: Bolo's head on a teal rounded square. Used in phone
 * mock-ups, the package tiles and the /bolo hero. Decorative by default —
 * the word "Bolo" always sits next to it in text.
 */
export function BoloAppIcon({
  size = 40,
  className = "",
  title,
}: {
  size?: number;
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <rect width="64" height="64" rx="16" fill="#0A7C73" />
      <rect width="64" height="32" rx="16" fill="#13A193" opacity="0.55" />
      <circle cx="29" cy="31" r="17" fill="#3BAA4E" />
      <path d="M16 22 C20 16 28 14 34 16 C27 17 21 20 18 26 Z" fill="#9AD86E" />
      <path
        d="M14 40 Q26 52 42 42"
        stroke="#F28AA0"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M15 44 Q27 56 43 45"
        stroke="#1B1F23"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="34" cy="27" r="6" fill="#FFD27A" />
      <circle cx="34" cy="27" r="5" fill="#FFFFFF" />
      <circle cx="35" cy="27" r="3.2" fill="#1B1F23" />
      <circle cx="36.2" cy="25.6" r="1.1" fill="#FFFFFF" />
      <path d="M44 33 C48 36 48 40 46 42 C43 42 41 39 41 36 Z" fill="#1B1F23" />
      <path
        d="M38 23 C46 19 54 24 54 33 C54 38 51 41 48 41 C49 36 47 32 42 31 C39 30 37 27 38 23 Z"
        fill="#E0453A"
      />
      <path d="M41 23 C46 22 50 25 51 29 C48 26 45 24 41 25 Z" fill="#F27467" />
    </svg>
  );
}
