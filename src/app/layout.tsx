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
  title: "Digital Invitation",
  description:
    "Wedding digital invitation adalah undangan pernikahan berbasis digital yang dirancang untuk menyampaikan informasi acara pernikahan secara praktis, modern, dan ramah lingkungan. Menggunakan media seperti website, aplikasi, atau file digital, undangan ini memungkinkan pasangan pengantin untuk berbagi detail pernikahan dengan lebih fleksibel.",
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
