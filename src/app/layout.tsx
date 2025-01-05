import type { Metadata } from "next";
import { Cormorant, Corinthia } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const corinthia = Corinthia({
  subsets: ["latin"],
  variable: "--font-corinthia",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Ronal-Fadilla",
  description:
    "Pernikahan adalah ikatan lahir dan batin antara seorang laki-laki dan perempuan untuk membentuk keluarga yang bahagia dan sejahtera. Pernikahan memiliki banyak makna.",
  openGraph: {
    title: "Ronal-Fadilla",
    description:
      "Pernikahan adalah ikatan lahir dan batin antara seorang laki-laki dan perempuan untuk membentuk keluarga yang bahagia dan sejahtera. Pernikahan memiliki banyak makna.",
    siteName: "Ronal-Fadilla Wedding",
    images: [
      {
        url: "/pic7.jpg",
        width: 1200,
        height: 630,
        alt: "Ronal dan Fadilla Wedding",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ronal-Fadilla",
    description:
      "Pernikahan adalah ikatan lahir dan batin antara seorang laki-laki dan perempuan untuk membentuk keluarga yang bahagia dan sejahtera. Pernikahan memiliki banyak makna",
    images: ["/pic7.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${corinthia.variable} ${cormorant.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
