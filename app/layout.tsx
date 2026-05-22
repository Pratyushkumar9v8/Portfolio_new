import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Pratyush Kumar | Full Stack Engineer",
  description: "Portfolio of Pratyush Kumar — Full Stack Engineer",
  icons: {
    icon: [
      {
        url: "/icon-sign.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-vscode-bg text-white antialiased">
        <CustomCursor />
        <div className="scanline" />
        {children}
      </body>
    </html>
  );
}
