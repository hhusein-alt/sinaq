import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Free virtual job simulations and career prep | Forage",
  description:
    "Explore careers and prepare for the job with hundreds of free job simulations designed by the world's top employers.",
  icons: {
    icon: [
      { url: "/seo/favicon-16x16.png", sizes: "16x16" },
      { url: "/seo/favicon-32x32.png", sizes: "32x32" },
      { url: "/seo/favicon-96x96.png", sizes: "96x96" },
    ],
    apple: [{ url: "/seo/apple-icon-180x180.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-dm-sans)] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
