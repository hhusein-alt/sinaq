export function ForageLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="120"
      height="28"
      viewBox="0 0 120 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Forage"
    >
      <path
        d="M10.5 3C6.36 3 3 6.36 3 10.5S6.36 18 10.5 18c1.83 0 3.51-.66 4.81-1.75l.19.19v.56l5 4.99L22.49 20l-4.99-5h-.56l-.19-.19A7.47 7.47 0 0 0 18 10.5C18 6.36 14.64 3 10.5 3Zm0 2.3a5.2 5.2 0 1 1 0 10.4 5.2 5.2 0 0 1 0-10.4Z"
        fill="#1C6AC3"
      />
      <text
        x="28"
        y="20"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="20"
        fontWeight="700"
        fill="#3F3F3F"
      >
        forage
      </text>
    </svg>
  );
}

export function HamburgerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="Menu"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
