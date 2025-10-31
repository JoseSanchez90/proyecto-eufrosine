import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import LenisSmoothScroll from "@/components/lenisSmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Datos de la empresa - Modifica estos valores según tu negocio
const companyData = {
  name: "Eufrosine - Agua de Mesa",
  description:
    "Descubre nuestra agua de mesa premium, purificada y enriquecida con minerales esenciales. Calidad garantizada para tu hogar y negocio. Entrega a domicilio.",
  url: "https://eufrosine.vercel.app/", // Cambia por tu dominio real
  logo: "/img/Logo-Eufrosine-transparent.png", // Ruta a tu logo
  phone: "+51903565918",
  email: "aguademesaeufrosineperu@gmail.com",
  address: {
    street: "Hualmay",
    city: "Huacho",
    country: "Perú",
  },
  social: {
    facebook: "https://www.facebook.com/aguaeufrosine",
    instagram: "https://www.instagram.com/aguaeufrosine/",
    whatsapp: "https://wa.me/51903565918",
  },
};

export const metadata: Metadata = {
  title: {
    default: companyData.name,
    template: `%s | ${companyData.name}`,
  },
  description: companyData.description,
  keywords: [
    "agua de mesa",
    "agua purificada",
    "agua premium",
    "agua mineral",
    "agua delivery",
    "agua para hogar",
    "agua para oficina",
    "agua embotellada",
    "hidratación saludable",
  ].join(", "),

  // Metadatos básicos
  authors: [{ name: companyData.name }],
  creator: companyData.name,
  publisher: companyData.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Metadatos para Open Graph (Facebook, Instagram, etc.)
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: companyData.url,
    title: companyData.name,
    description: companyData.description,
    siteName: companyData.name,
    images: [
      {
        url: "/images/og-image.jpg", // Crea una imagen 1200x630px para redes sociales
        width: 1200,
        height: 630,
        alt: companyData.name,
      },
    ],
  },

  // Metadatos para Twitter
  twitter: {
    card: "summary_large_image",
    title: companyData.name,
    description: companyData.description,
    images: ["/images/twitter-image.jpg"], // Crea una imagen 1200x600px para Twitter
    creator: "@tuempresa", // Tu handle de Twitter si tienes
  },

  // Metadatos adicionales
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

  // Metadatos para WhatsApp
  other: {
    "og:phone_number": companyData.phone,
    "og:email": companyData.email,
    "og:latitude": "-11.1075",
    "og:longitude": "-77.6073",
    "og:street-address": companyData.address.street,
    "og:locality": companyData.address.city,
    "og:country-name": companyData.address.country,
  },
};

// Schema.org structured data para mejor SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: companyData.name,
  description: companyData.description,
  url: companyData.url,
  logo: `${companyData.url}${companyData.logo}`,
  telephone: companyData.phone,
  email: companyData.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: companyData.address.street,
    addressLocality: "Huacho",
    addressRegion: "Lima",
    addressCountry: "Perú",
  },
  sameAs: [companyData.social.facebook, companyData.social.instagram],
  openingHours: "Mo-Fr 08:00-18:00, Sa 08:00-14:00",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Viewport para móviles */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon y Apple Touch Icon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {/* Theme Color para navegadores móviles */}
        <meta name="theme-color" content="#00A3FF" />

        {/* Canonical URL */}
        <link rel="canonical" href={companyData.url} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisSmoothScroll />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
