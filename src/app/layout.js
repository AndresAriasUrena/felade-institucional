import { Inter, Montserrat, Merriweather } from "next/font/google";
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});

export const metadata = {
  title: "FELADE - Fundación para el Estudio del Lavado de Activos y Delitos",
  description: "FELADE ofrece certificaciones internacionales CIPLAD, CIMAR y CIBCA para el desarrollo profesional en Latinoamérica. Educación superior de calidad con reconocimiento internacional.",
  keywords: "FELADE, certificaciones, CIPLAD, CIMAR, CIBCA, educación, Latinoamérica, administración, derecho económico",
  authors: [{ name: "FELADE" }],
  creator: "FELADE",
  publisher: "FELADE",
  openGraph: {
    title: "FELADE - Certificaciones Internacionales",
    description: "Certificaciones CIPLAD, CIMAR y CIBCA para profesionales en Latinoamérica",
    url: "https://felade.com",
    siteName: "FELADE",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FELADE - Certificaciones Internacionales",
    description: "Certificaciones CIPLAD, CIMAR y CIBCA para profesionales en Latinoamérica",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${montserrat.variable} ${merriweather.variable} font-sans antialiased bg-white text-gray-900`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
