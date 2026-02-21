import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Julia Fonseca | Dev Full Stack",
  description:
    "Portfólio de Julia Fonseca — Desenvolvedora Full Stack especializada em Next.js, JavaScript, HTML e CSS. Criando experiências digitais modernas e de alta performance.",
  keywords: [
    "Julia Fonseca",
    "Desenvolvedora Full Stack",
    "Next.js",
    "JavaScript",
    "Frontend",
    "Backend",
    "Portfólio Dev"
  ],
  authors: [{ name: "Julia Fonseca" }],
  creator: "Julia Fonseca",

  openGraph: {
    title: "Julia Fonseca | Desenvolvedora Full Stack",
    description:
      "Portfólio profissional de Julia Fonseca — Desenvolvedora Full Stack.",
    url: "https://identidade-visual-me.vercel.app",
    siteName: "Julia Fonseca Portfolio",
    locale: "pt_BR",
    type: "website",
  },

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#8b5cf6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}