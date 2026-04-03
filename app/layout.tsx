import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pratyush Kumar | Full Stack Engineer",
  description: "Portfolio of Pratyush Kumar — Full Stack Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-vscode-bg text-white antialiased">
        <div className="scanline" />
        {children}
      </body>
    </html>
  );
}
