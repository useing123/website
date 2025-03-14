import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ossein Gizatulla Personal website",
  description: "Ossein Gizatulla Personal website | Гизатуллаев Осеин вебсайт",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
