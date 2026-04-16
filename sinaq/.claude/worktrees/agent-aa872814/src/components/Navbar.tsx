import Link from "next/link";
import { ForageLogo } from "@/components/icons";
import { HamburgerIcon } from "@/components/icons";

const NAV_LINKS = [
  { label: "Job Simulations", href: "#" },
  { label: "Jobs", href: "#" },
  { label: "Blog", href: "#" },
  { label: "For Enterprise", href: "#" },
  { label: "For Educators", href: "#" },
] as const;

export function Navbar() {
  return (
    <nav className="relative z-50 h-16 w-full max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8">
      {/* Left: Logo */}
      <Link href="/" aria-label="Forage home">
        <ForageLogo />
      </Link>

      {/* Center: Nav links (hidden on mobile) */}
      <div className="hidden md:flex items-center gap-0">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="px-4 py-2 text-[15px] font-bold text-[#3F3F3F] hover:opacity-80 transition-opacity"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Right: Buttons (hidden on mobile) */}
      <div className="hidden md:flex items-center gap-2">
        <Link
          href="#"
          className="inline-flex items-center justify-center h-[30px] px-5 text-xs font-bold text-white bg-[#1C6AC3] rounded-[6px] border-[0.8px] border-[#1C6AC3] hover:opacity-90 transition-opacity"
          style={{ fontSize: "12px" }}
        >
          Sign Up
        </Link>
        <Link
          href="#"
          className="inline-flex items-center justify-center h-[30px] px-5 text-xs font-bold text-[#1C6AC3] bg-white rounded-[6px] border-[0.8px] border-[#1C6AC3] hover:opacity-90 transition-opacity"
          style={{ fontSize: "12px" }}
        >
          Sign In
        </Link>
      </div>

      {/* Mobile: Hamburger */}
      <button
        className="md:hidden flex items-center justify-center text-[#3F3F3F]"
        aria-label="Open menu"
        type="button"
      >
        <HamburgerIcon />
      </button>
    </nav>
  );
}
